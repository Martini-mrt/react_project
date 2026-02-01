/**
 * Аундификация и регистрация пользователя
 */


import { api } from "../../../app/rootApi";

import {
  SuccessLoginUserSchema,
  SuccessProfileUserSchema,
  SuccessRegistrationsUserSchema,
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
      transformResponse: (response: unknown): TSuccessUserAuthSchema => {
        const result = SuccessLoginUserSchema.safeParse(response);
          console.log(result)
        if (!result.success) {
          //делать функцию ответа
          throw new Error("Server data corrupted");
        }

        return result.data;
      },
      invalidatesTags: ["auth/login"],
    }),

    logout: builder.query<TSuccessUserAuthSchema, void>({
      query: () => `/auth/logout`,
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



   getUserProfile: builder.query<TSuccessUserAuthSchema, void>({
      query: () => `/profile`,
      transformResponse: (response: unknown): TSuccessUserAuthSchema => {
        const result = SuccessProfileUserSchema.safeParse(response);
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
  useLogoutQuery,
  useCreateUserMutation,
  useGetUserProfileQuery,
} = userApi;




