/**
 * Запрос информации о фильмах
 */

import {
  MovieSchema,
  MoviesGenresSchema,
  MoviesSchemaList
} from "../Schema/MoviesSchem";
import { safeApiCall } from "../../utils/safeApiCall";
import { apiClient } from "../axios";
import { ErrorSchema } from "../Schema/ErrorSchem";


export interface IGetMoviesByFilter {
  genre?: string;
  title?: string;
  limit?: number;
  page?: number;
}

// запрос и валидация Movies c фильтром запроса
export const getMoviesByFilter = async ({
  genre,
  title,
  page,
  // limit = 15,
  limit,
}: IGetMoviesByFilter = {}) => {
  // для сборки строки парметров
  const buildParamUrl = new URLSearchParams();
  if (genre) buildParamUrl.append("genre", genre);
  if (title) buildParamUrl.append("title", title);
  if (page) buildParamUrl.append("page", String(page));
  if (limit) buildParamUrl.append("count", String(limit));
  console.log(buildParamUrl.toString())
  return safeApiCall(
    () =>
      apiClient
        .get(`/movie?${buildParamUrl.toString()}`)
        .then((res) => res.data),
    MoviesSchemaList,
    ErrorSchema
  );
};

// запрос и валидация TOP 10 фильмов
export const getTopTenMovie = async () => {
  return safeApiCall(
    () => apiClient.get("/movie/top10").then((res) => res.data),
    MoviesSchemaList,
    ErrorSchema
  );
};

// запрос и валидация Genres фильмов
export const getGenresMovie = async () => {
  return safeApiCall(
    () => apiClient.get("/movie/genres").then((res) => res.data),
    MoviesGenresSchema,
    ErrorSchema
  );
};

// запрос и валидация по ID
export const getMovie = async (id: string) => {
  return safeApiCall(
    () => apiClient.get(`/movie/${id}`).then((res) => res.data),
    MovieSchema,
    ErrorSchema
  );
};

// запрос и валидация RANDOM фильмов
export const getRandomMovie = async ()=> {
  return safeApiCall(
    () => apiClient.get("/movie/random").then((res) => res.data),
    MovieSchema,
    ErrorSchema
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
