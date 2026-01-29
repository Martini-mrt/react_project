import { configureStore } from "@reduxjs/toolkit";
// Импортируем именно основной api
import { api } from "./rootApi";

export const store = configureStore({
  reducer: {

    // reducerPath по умолчанию "api", мы берем его динамически
    [api.reducerPath]: api.reducer,
  },

  // Добавление мидлвара обязательно для работы кэширования и инвалидации
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

//TODO сделать стор и сделать слайсы
