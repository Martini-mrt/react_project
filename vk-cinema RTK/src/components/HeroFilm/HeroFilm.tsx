import React from "react";
import "./HeroFilm.scss";
import { HeroFilmProps } from "./HeroFilm.types";
import BtnBox from "../BtnBox";
import InfoFilm from "../InfoFilm";
import { formatMinutesToHours } from "../../utils/formatMinutesToHours";
import { truncateText } from "../../utils/truncateText";
import plugMovieImg from "../../assets/img/plug-Movie.jpg";
import { useAddToFavorites } from "../../hooks/favorites/useFavorites";


// TODO подумать над обрезкой текста при адаптиве

const HeroFilm: React.FC<HeroFilmProps> = ({
  movieData,
  isSinglePage,
  handleRefetch,
  handleAboutFilm,
  handleLike,
  handleTriller,
}) => {
  const {
    id,
    tmdbRating,
    releaseYear,
    genres,
    runtime,
    title,
    plot,
    backdropUrl,
    posterUrl,
  } = movieData || {};

  const { mutate } = useAddToFavorites();

  return (
    <section className="hero-film">
      <div className="container hero-film__container">
        <div className="hero-film__content">
          <InfoFilm
            rating={Number(tmdbRating)}
            year={releaseYear}
            genre={genres}
            time={formatMinutesToHours(runtime)}
          />

          <h1 className="hero-film__heading">{title}</h1>
          <p className="hero-film__description">{truncateText(plot, 200)}</p>

          <BtnBox
            isSingleMoviePage={isSinglePage}
            handleRefetch={handleRefetch}
            handleAboutFilm={handleAboutFilm}
            // handleLike={() => mutate(String(id))}
            handleLike={handleLike}
            handleTriller={handleTriller}
          />
        </div>

        <div className="hero-film__wrap-img">
          {
            <img
              className="hero-film__img"
              src={backdropUrl || posterUrl || plugMovieImg}
              alt={title || "Кадр из фильма"}
            />
          }
        </div>
      </div>
    </section>
  );
};

export default HeroFilm;
