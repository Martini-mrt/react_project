import { useQuery } from "@tanstack/react-query";
import { getGenresMovie, getMovie, getMoviesByFilter, getRandomMovie, getTopTenMovie, IGetMoviesByFilter } from "../../api/movies";
import { wrapQueryFn } from "../../utils/wrapQueryFn";
import { TMovie } from "../../schemas/MoviesSchem";





export const useMoviesByFilter = (filter: IGetMoviesByFilter) => {
  return useQuery({
    queryKey: ["movie"],
    queryFn: wrapQueryFn(() => getMoviesByFilter(filter)),
  });
};

export const useTopTenMovies = () => {
  return useQuery({
    queryKey: ["top", "10"],
    queryFn: wrapQueryFn(getTopTenMovie)
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
