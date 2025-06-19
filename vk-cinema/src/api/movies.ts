/**
 * Запрос информации о фильмах
 */

import { movieSchema, TMovie } from "../schemas/movies";
import { apiClient } from "./axios";

interface IGetMoviesByFilter {
    genre?: string;
    title?: string;
    maxCount?: number;
}

// запрос и валидация по ID
export const getMovie = async (id: string): Promise<TMovie> => {
  const res = await apiClient.get(`/movie/${id}`);
  return movieSchema.parse(res.data);
};

// запрос и валидация TOP 10 фильмов
export const getTopMovie = async () => {
  const res = await apiClient.get("/movie/top10");
  return movieSchema.array().parse(res.data);
};

// запрос и валидация RANDOM фильмов
export const getRandomMovie = async () => {
  const res = await apiClient.get("/movie/random");
  return movieSchema.parse(res.data);
};


// запрос и валидация Movies c фильтром запроса
export const getMoviesByFilter = async ({ genre, title, maxCount = 20 } : IGetMoviesByFilter = {}) => {

  // для сборки строки парметров
  const buildParamUrl = new URLSearchParams();

  if (genre) buildParamUrl.append("genre", genre);
  if (title) buildParamUrl.append("title", title);
  if (maxCount) buildParamUrl.append("count", String(maxCount));

  const res = await apiClient.get(`/movie?${buildParamUrl.toString()}`);

  return movieSchema.array().parse(res.data);
};



