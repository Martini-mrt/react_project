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
    },
    providesTags: ['favorites']
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
    invalidatesTags: ['favorites']
}),


deleteFavorites: builder.mutation<TSuccessUserAuthSchema, string>({
    query: (id) => ({
       url: `/favorites/${id}`,
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
    invalidatesTags: ['favorites']
}),



// Единая мутация для переключения
// Передаем ID и по isAdded делаем мутацию POST / DELETE
    toggleFavorite: builder.mutation<TSuccessUserAuthSchema, { id: string; isAdded: boolean }>({
      query: ({ id, isAdded }) => ({
        url: isAdded? `/favorites/${id}` : `/favorites`,
        // Если уже добавлено (isAdded: true) — значит надо удалить (DELETE)
        // Если нет — добавить (POST)
        method: isAdded ? 'DELETE' : 'POST', 
        body: { id }
      }),
      transformResponse: (response: unknown): TSuccessUserAuthSchema => {
        const result = SuccessLoginUserSchema.safeParse(response);
        if (!result.success) throw new Error("Server data corrupted");
        return result.data;
      },
      // Инвалидируем избранное, чтобы списки обновились
      invalidatesTags: ['favorites','auth/login']
    }),






  }),

  overrideExisting: false, // Рекомендуется добавить, чтобы избежать ошибок при Hot Reload
});


export const { 
    useGetFavoritesQuery, 
    useAddToFavoritesMutation, 
    useDeleteFavoritesMutation,
    useToggleFavoriteMutation,
} = favoritesApi;