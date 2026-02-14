/**
 * Аундификация и регистрация пользователя
 */


import { api } from "../../../app/rootApi";

import {
  SuccessLoginUserSchema,
  SuccessProfileUserSchema,
  SuccessRegistrationsUserSchema,
  TSuccessProfileUserSchema,
  TSuccessUserAuthSchema,
} from "../schema/UserSchem";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<TSuccessUserAuthSchema, {email: string, password: string}>({
      query: ({email, password}) => ({
        url: `/auth/login`,
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["auth/login"],
      transformResponse: (response: unknown): TSuccessUserAuthSchema => {
        const result = SuccessLoginUserSchema.safeParse(response);
          console.log(result)
        if (!result.success) {
          //делать функцию ответа
          throw new Error("Server data corrupted");
        }

        return result.data;
      },
      
    }),

    logout: builder.mutation<TSuccessUserAuthSchema, void>({
      query: () => ({
        url: `/auth/logout`,
        method: 'GET', 
      }),
      invalidatesTags: ["auth/login"],

    //   при logout очищаем кеш - если есть данные в LocalStorage удаляем (в моем случае только кешь)
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // Полностью очищаем кэш API (полезно, чтобы затереть историю поисков и т.д.)
          dispatch(userApi.util.resetApiState());
          // Если есть токен в localStorage — удаляем
        //   localStorage.removeItem('token'); 
        } catch (e) {
          console.error("Ошибка при выходе:", e);
        }
      },
      
      transformResponse: (response: unknown): TSuccessUserAuthSchema => {
        const result = SuccessLoginUserSchema.safeParse(response);
        if (!result.success) {
          console.error("Ошибка валидации данных сервера:", result.error);
          throw new Error("Server data corrupted");
        }
        return result.data;
      },
    }),

    createUser: builder.mutation<TSuccessUserAuthSchema, {email: string,password: string,name: string,surname: string}>({
      query: ({email, password, name, surname}) => ({
        url: `/user`,
        method: "POST",
        body: {email, password, name, surname},
      }),
      transformResponse: (response: unknown): TSuccessUserAuthSchema => {
        const result = SuccessRegistrationsUserSchema.safeParse(response);
        if (!result.success) {
          //делать функцию ответа
          throw new Error("Server data corrupted");
        }

        return result.data;
      },
    //   invalidatesTags: ["Favorites"],
    }),



   getUserProfile: builder.query<TSuccessProfileUserSchema, void>({
      query: () => `/profile`,
      providesTags: ['auth/login'], // Этот запрос "слушает" тег User
      transformResponse: (response: unknown): TSuccessProfileUserSchema => {
        const result = SuccessProfileUserSchema.safeParse(response);

        console.log(result)

        if (!result.success) {
          console.error("Ошибка валидации данных сервера:", result.error);
          throw new Error("Server data corrupted");
        }
        return result.data;
      },
    }),



  }),

  overrideExisting: false, // Рекомендуется добавить, чтобы избежать ошибок при Hot Reload
});


export const {
  useLoginMutation,
  useLogoutMutation,
  useCreateUserMutation,
  useGetUserProfileQuery,
} = userApi;




