import React, { useEffect, useState } from "react";
import "./MoviesByGenrePage.scss";
import { MoviesByGenrePageProps } from "./MoviesByGenrePage.types";
import SectionList from "../../layouts/Section";
import ListCardMoviesByGenre from "../../components/ListCardMoviesByGenre";
import { useParams } from "react-router";
import { useMoviesByFilter } from "../../hooks/Movie/useMovie";
import { translateGenres } from "../../utils/translateGenres";
import { capitalize } from "../../utils/capitalize";
import { TMovie } from "../../api/Schema/MoviesSchem";



const MoviesByGenrePage: React.FC<MoviesByGenrePageProps> = () => {
  const { genre } = useParams();
  const heading = genre && capitalize(translateGenres(genre) as string);

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<TMovie[]>([]);
  // const [limit, setLimit] = useState(10);

  const { data, error, isSuccess, isLoading } = useMoviesByFilter({
    genre,
    page,
    limit: 10,
  });

  // 👇 добавление новых фильмов к текущему списку
  useEffect(() => {
    if (isSuccess && data.length > 0) {
      setMovies((prev) => [...prev, ...data]);
    }
  }, [data, isSuccess]);

   const showBtn = !(!data || data.length === 0);

  const handleLoadMore = () => {
    // setLimit(5);
    setPage((prev) => prev + 1);
  };

  // console.log(page)

  // console.log(data, error, isLoading);

  // btnMore={}

  return (
    <SectionList heading={heading}>
      <ListCardMoviesByGenre
        listCard={movies}
        onLoadMore={handleLoadMore}
        isLoading={isLoading}
        isShowBtn={showBtn}
      />
    </SectionList>
  );
};

export default MoviesByGenrePage;
