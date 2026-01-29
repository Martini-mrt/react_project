import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "/api";

export const api = createApi({
  reducerPath: "api",
  //   tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

//   endpoints мы будем инжектировать
endpoints: () => ({}), // Оставляем пустым

//   endpoints: (builder) => ({
//     // здесь нужно написать функции запроса
//     getRandomMovie: builder.query({
//         query: () => `/movies/random`,
//     }),

//      // здесь можно писать другие эндпоинты

//   }),

});
