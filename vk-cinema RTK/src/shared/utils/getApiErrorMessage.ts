// Конвертация ошибок от сервера


import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

export const getApiErrorMessage = (
  error: FetchBaseQueryError | SerializedError | undefined,
): string | null => {
  if (!error) return null;

  // Если это системная ошибка RTK Query (например, FETCH_ERROR)
  if ("status" in error) {
    const serverData = error.data as { message?: string };

    // Если бэкенд прислал конкретное сообщение, приоритет отдаем ему
    if (serverData?.message) return serverData.message;

    // Обрабатываем коды
    if (typeof error.status === "number") {
      switch (error.status) {
        case 400:
          return "Неверный логин или пароль.";
        case 401:
          return "Сессия истекла. Пожалуйста, войдите снова.";
        case 403:
          return "Доступ запрещен.";
        case 404:
          return "Запрашиваемый ресурс не найден.";
        case 409:
          return "Такой пользователь уже зарегистрирован.";
        case 422:
          return "Ошибка валидации данных.";
        case 500:
          return "Внутренняя ошибка сервера. Мы уже чиним!";
        case 503:
          return "Сервер временно перегружен.";
        default:
          return `Произошла ошибка (код: ${error.status})`; // Выводим код для отладки
      }
    }

    // нет соединения
    if (error.status === "FETCH_ERROR") return "Нет связи с сервером. Проверьте интернет.";
  }

  // Если ошибка пришла из transformResponse (Zod)
 return "Произошла непредвиденная ошибка";
};
