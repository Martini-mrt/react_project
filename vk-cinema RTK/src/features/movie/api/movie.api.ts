import {
  MovieSchema,
  MoviesSchemaList,
  MoviesGenresSchema,
  TMovie,
} from "../../../api/Schema/MoviesSchem";
import { api } from "../../../app/rootApi";

export interface IGetMoviesByFilter {
  genre?: string;
  title?: string;
  limit?: number;
  page?: number;
}

export const moviesApi = api.injectEndpoints({
  endpoints: (builder) => ({

    getMoviesByFilter: builder.query<TMovie[], IGetMoviesByFilter>({
      query: ({
        genre,
        title,
        page,
        // limit = 15,
        limit,
      }: IGetMoviesByFilter = {}) => {

        // todo вынести в функцию
        // для сборки строки парметров
        const buildParamUrl = new URLSearchParams();
        if (genre) buildParamUrl.append("genre", genre);
        if (title) buildParamUrl.append("title", title);
        if (page) buildParamUrl.append("page", String(page));
        if (limit) buildParamUrl.append("count", String(limit));
        console.log(buildParamUrl.toString());

        return `/movie?${buildParamUrl.toString()}`;
      },

      transformResponse: (response: unknown): TMovie[] => {
        const result = MoviesSchemaList.safeParse(response);

        if (!result.success) {
          //делать функцию ответа
          throw new Error("Server data corrupted");
        }
        return result.data;
      },
    }),

    // здесь нужно написать функции запроса
    getRandomMovie: builder.query<TMovie, void>({
      query: () => `/movie/random`,
      transformResponse: (response: unknown): TMovie => {
        const result = MovieSchema.safeParse(response);
        if (!result.success) {
          console.error("Ошибка валидации данных сервера:", result.error);
          throw new Error("Server data corrupted");
        }
        return result.data;
      },
    }),

    getTopTenMovie: builder.query<TMovie[], void>({
      query: () => `/movie/top10`,
      transformResponse: (response: unknown): TMovie[] => {
        const result = MoviesSchemaList.safeParse(response);

        if (!result.success) {
          //делать функцию ответа
          throw new Error("Server data corrupted");
        }
        return result.data;
      },
    }),

    getMovie: builder.query<TMovie, string>({
      query: (id) => `/movie/${id}`,
      transformResponse: (response: unknown): TMovie => {
        const result = MovieSchema.safeParse(response);

        if (!result.success) {
          //делать функцию ответа
          throw new Error("Server data corrupted");
        }
        return result.data;
      },
    }),

    getGenresMovie: builder.query<string[], void>({
      query: () => `/movie/genres`,
      transformResponse: (response: unknown): string[] => {
        const result = MoviesGenresSchema.safeParse(response);

        if (!result.success) {
          //делать функцию ответа
          throw new Error("Server data corrupted");
        }
        return result.data;
      },
    }),

    //
  }),
  overrideExisting: false, // Рекомендуется добавить, чтобы избежать ошибок при Hot Reload
});

// Экспортируем хук, чтобы использовать его в компонентах
export const {
  useGetRandomMovieQuery,
  useGetTopTenMovieQuery,
  useGetMovieQuery,
  useGetGenresMovieQuery,
  useGetMoviesByFilterQuery
} = moviesApi;
