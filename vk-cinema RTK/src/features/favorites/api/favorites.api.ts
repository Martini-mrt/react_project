/**
 * Запрос и мутация избранного
 */


import {
  MoviesSchemaList,
  TMovie,
} from "../../movie/schema/MoviesSchem"

import { api } from "../../../app/rootApi";
import { SuccessLoginUserSchema, TSuccessUserAuthSchema } from "../../user/schema/UserSchem";


export const favoritesApi = api.injectEndpoints({
  endpoints:(builder) => ({
      
getFavorites: builder.query<TMovie[], void>({
    query: () => `/favorites`,
    transformResponse: (response: unknown): TMovie[] => {
      const result = MoviesSchemaList.safeParse(response);

      if (!result.success) {
        //делать функцию ответа
        throw new Error("Server data corrupted");
      }

      return result.data;
    }
}),

addToFavorites: builder.mutation<TSuccessUserAuthSchema, string>({
    query: (id) => ({
       url: `/favorites`,
      method: 'POST',
      body: {id}
    }),
    transformResponse: (response: unknown): TSuccessUserAuthSchema => {
      const result = SuccessLoginUserSchema.safeParse(response);

      if (!result.success) {
        //делать функцию ответа
        throw new Error("Server data corrupted");
      }

      return result.data;
    },
    invalidatesTags: ['Favorites']
}),


deleteFavorites: builder.mutation<TSuccessUserAuthSchema, string>({
    query: (id) => ({
       url: `/favorites`,
      method: 'DELETE',
      body: {id}
    }),
    transformResponse: (response: unknown): TSuccessUserAuthSchema => {
      const result = SuccessLoginUserSchema.safeParse(response);

      if (!result.success) {
        //делать функцию ответа
        throw new Error("Server data corrupted");
      }

      return result.data;
    },
    invalidatesTags: ['Favorites']
}),


  }),

  overrideExisting: false, // Рекомендуется добавить, чтобы избежать ошибок при Hot Reload
});


export const { 
    useGetFavoritesQuery, 
    useAddToFavoritesMutation, 
    useDeleteFavoritesMutation
} = favoritesApi;