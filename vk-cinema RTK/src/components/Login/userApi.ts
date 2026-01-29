import { baseApi } from '../../services/baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userMe: builder.query<any, void>({
      query: () => 'me',
      providesTags: ['User'],
    }),
    login: builder.mutation<void, any>({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useUserMeQuery, useLoginMutation } = userApi;