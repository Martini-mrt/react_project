import { keepPreviousData, useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  getGenresMovie,
  getMovie,
  getMoviesByFilter,
  getRandomMovie,
  getTopTenMovie,
  IGetMoviesByFilter,
} from "../../api/movies";
import { wrapQueryFn } from "../../utils/wrapQueryFn";
import { TMovie } from "../../schemas/MoviesSchem";
import { queryClient } from "../../api/queryClient";





// export const useMoviesByFilter = ({
//   genre,
//   title,
//   page,
//   limit,
// }: IGetMoviesByFilter): UseQueryResult<TMovie[], Error> => {
//   return useQuery<TMovie[], Error>({
//     queryKey: ["moviesByGenre", genre, page],
//     queryFn: wrapQueryFn(() => getMoviesByFilter({genre, page, limit, title})),
//     placeholderData: keepPreviousData, // сохраняет старые данные при пагинации
//   });



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

// import { useQuery } from "@tanstack/react-query";
// import { getMovie, getTopTenMovie, getRandomMovie } from "../../api/movies";
// import { TMovie } from "../../types/movie";

// // Запрос фильма по ID
// export const useGetMovieById = (id: string) => {
//   return useQuery<TMovie>({
//     queryKey: ["movie", id],
//     queryFn: async () => {
//       const { data, error } = await getMovie(id);
//       if (error) throw new Error(typeof error === "string" ? error : "Ошибка API");
//       return data;
//     },
//     enabled: !!id, // чтобы не вызывался без ID
//   });
// };

// // Топ 10 фильмов
// export const useTopTenMovies = () => {
//   return useQuery<TMovie[]>({
//     queryKey: ["top", "10"],
//     queryFn: async () => {
//       const { data, error } = await getTopTenMovie();
//       if (error) throw new Error(typeof error === "string" ? error : "Ошибка API");
//       return data;
//     },
//   });
// };

// // Случайный фильм
// export const useRandomMovie = () => {
//   return useQuery<TMovie>({
//     queryKey: ["movie", "random"],
//     queryFn: async () => {
//       const { data, error } = await getRandomMovie();
//       if (error) throw new Error(typeof error === "string" ? error : "Ошибка API");
//       return data;
//     },
//   });
// };

// // Общий экспорт (не обязательно, но удобно)
// export const useMovie = {
//   byId: useGetMovieById,
//   topTen: useTopTenMovies,
//   random: useRandomMovie,
// };
