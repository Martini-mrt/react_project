import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  getGenresMovie,
  getMovie,
  getMoviesByFilter,
  getRandomMovie,
  getTopTenMovie,
  IGetMoviesByFilter,
} from "../../api/movie/movies";
import { wrapQueryFn } from "../../utils/wrapQueryFn";
import { TMovie } from "../../api/Schema/MoviesSchem";


export const useMoviesByFilter = ({
  genre,
  title,
  page,
  limit,
}: IGetMoviesByFilter): UseQueryResult<TMovie[], Error> => {
  return useQuery<TMovie[], Error>({
    queryKey: ["moviesByGenre", genre, page],
    queryFn: wrapQueryFn(() => getMoviesByFilter({genre, page, limit, title})),
    // placeholderData: () =>
      // queryClient.getQueryData<TMovie[]>(['moviesByGenre', genre, title, page - 1]) ?? [], // сохраняет старые данные при пагинации
    // placeholderData: (previousData, previousQuery) => { console.log(previousData)  },
  });

};

export const useTopTenMovies = () => {
  // data.slice(0, 10)
  // console.log(getTopTenMovie())
  return useQuery({
    queryKey: ["top", "10"],
    // queryFn: wrapQueryFn(getTopTenMovie)
    queryFn: async () => {
      const movies = await wrapQueryFn(getTopTenMovie)(); // movies: Movie[]
      return Array.isArray(movies) ? movies.slice(0, 10) : [];
    },
  });
};

export const useGenresMovie = () => {
  return useQuery({
    queryKey: ["movie", "genres"],
    queryFn: wrapQueryFn(getGenresMovie),
  });
};

export const useGetMovieById = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: wrapQueryFn(() => getMovie(id)),
    enabled: !!id, // не запрашивать, пока нет id
  });
};

export const useRandomMovie = () => {
  return useQuery({
    queryKey: ["movie", "random"],
    queryFn: wrapQueryFn(getRandomMovie),
  });
};

