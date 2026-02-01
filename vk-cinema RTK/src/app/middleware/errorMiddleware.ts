// todo потом подключить Toast Notifications in Reactjs (react-toastify) для состояний

import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
// import { toast } from 'react-toastify'; // Или любая другая библиотека уведомлений

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  // Проверяем, является ли экшен ошибкой от RTK Query
  if (isRejectedWithValue(action)) {
    // Типизируем payload как FetchBaseQueryError, чтобы появились поля status и data
    const payload = action.payload as FetchBaseQueryError;
    const status = payload?.status;
    const data = payload?.data as any;

    if (status === 401) {
      // Автоматический разлогин или уведомление
      console.warn('Сессия истекла. Перенаправление на логин...');
      // window.location.href = '/login'; 
    }

    if (status === 500) {
    //   toast.error('Ошибка сервера. Мы уже работаем над исправлением!');
      console.error('Ошибка сервера. Мы уже работаем над исправлением!');
    }

    if (status === 'FETCH_ERROR') {
    //   toast.error('Проблемы с интернет-соединением');
            console.error('Проблемы с интернет-соединением');

    }

    // Если ошибка пришла из твоего Zod валидатора (throw new Error)
    if (data?.message) {
      console.error('Ошибка валидации данных:', data.message);
    }
  }

  return next(action);
};





// доработка мидл варе для функции ошибок

// src/app/middleware/errorMiddleware.ts
// import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
// import { getApiErrorMessage } from '@/shared/api/getApiErrorMessage'; // твоя функция

// export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
//   if (isRejectedWithValue(action)) {
//     // 1. Получаем понятный текст ошибки через общую функцию
//     const message = getApiErrorMessage(action.payload as any);
    
//     // 2. Глобальная реакция (например, на системные сбои)
//     const status = (action.payload as any)?.status;

//     if (status === 'FETCH_ERROR' || status === 500) {
//       console.error(`Глобальная ошибка: ${message}`);
//       // Здесь потом будет toast.error(message);
//     }

//     if (status === 401) {
//       console.warn("Нужен переход на логин, так как:", message);
//     }
//   }

//   return next(action);
// };