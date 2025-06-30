/**
 * Запрос информации о фильмах
 */

import {
  MovieSchema,
  MoviesGenresSchema,
  MoviesSchemaList
} from "../schemas/MoviesSchem";
import { safeApiCall } from "../utils/safeApiCall";
import { apiClient } from "./axios";
import { ErrorUserAuthSchema } from "./User/User";

export interface IGetMoviesByFilter {
  genre?: string;
  title?: string;
  maxCount?: number;
}

// запрос и валидация Movies c фильтром запроса
export const getMoviesByFilter = async ({
  genre,
  title,
  maxCount = 20,
}: IGetMoviesByFilter = {}) => {
  // для сборки строки парметров
  const buildParamUrl = new URLSearchParams();
  if (genre) buildParamUrl.append("genre", genre);
  if (title) buildParamUrl.append("title", title);
  if (maxCount) buildParamUrl.append("count", String(maxCount));
  return safeApiCall(
    () =>
      apiClient
        .get(`/movie?${buildParamUrl.toString()}`)
        .then((res) => res.data),
    MoviesSchemaList,
    ErrorUserAuthSchema
  );
};

// запрос и валидация TOP 10 фильмов
export const getTopTenMovie = async () => {
  return safeApiCall(
    () => apiClient.get("/movie/top10").then((res) => res.data),
    MoviesSchemaList,
    ErrorUserAuthSchema
  );
};

// запрос и валидация Genres фильмов
export const getGenresMovie = async () => {
  return safeApiCall(
    () => apiClient.get("/movie/genres").then((res) => res.data),
    MoviesGenresSchema,
    ErrorUserAuthSchema
  );
};

// запрос и валидация по ID
export const getMovie = async (id: string) => {
  return safeApiCall(
    () => apiClient.get(`/movie/${id}`).then((res) => res.data),
    MovieSchema,
    ErrorUserAuthSchema
  );
};

// запрос и валидация RANDOM фильмов
export const getRandomMovie = async ()=> {
  return safeApiCall(
    () => apiClient.get("/movie/random").then((res) => res.data),
    MovieSchema,
    ErrorUserAuthSchema
  );
};

// // запрос и валидация Movies c фильтром запроса
// export const getMoviesByFilter = async ({ genre, title, maxCount = 20 } : IGetMoviesByFilter = {}) => {

//   // для сборки строки парметров
//   const buildParamUrl = new URLSearchParams();

//   if (genre) buildParamUrl.append("genre", genre);
//   if (title) buildParamUrl.append("title", title);
//   if (maxCount) buildParamUrl.append("count", String(maxCount));

//   const res = await apiClient.get(`/movie?${buildParamUrl.toString()}`);

//   return MovieSchema.array().parse(res.data);
// };

// export const login = async (
//   email: string,
//   password: string
// ) => {
//   return safeApiCall(
//     () =>
//       apiClient.post("/auth/login", {
//         email,
//         password,
//       }, { withCredentials: true }).then(res => res.data),
//     SuccessUserAuthSchema,
//     ErrorUserAuthSchema
//   );
// };
