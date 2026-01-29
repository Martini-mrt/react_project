import axios, { AxiosError } from "axios";
import { ApiError } from "../utils/apiError";





// инициализируем Axios

// ! на продакшине поменять!
// https://cinemaguide.skillbox.cc'
const serverAPI = "/api";

export const apiClient = axios.create({
  baseURL: serverAPI,
  withCredentials: true,
  //   timeout: 8000,
  // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  // headers: { 'Content-Type': 'application/json' },
});


// const setupAxiosInterceptors = (apiClient: typeof axios) => {
  apiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (axios.isAxiosError(error) && error.response) {
        const status = error.response.status;

        let message = "Произошла неизвестная ошибка";

        switch (status) {
          case 400:
            message = "Неверный логин или пароль.";
            break;
          case 401:
            message = "Вы не авторизованы. Пожалуйста, войдите в аккаунт.";
            break;
          case 403:
            message = "У вас нет прав для выполнения этого действия.";
            break;
          case 404:
            message = "Ресурс не найден.";
            break;
          case 409:
            message = "Такой пользователь уже существует.";
            break;
          case 422:
            message = "Ошибка валидации. Проверьте введённые данные.";
            break;
          case 500:
            message = "Ошибка сервера. Попробуйте позже.";
            break;
          case 503:
            message = "Сервер временно недоступен.";
            break;
        }

        // Можно показать уведомление, лог, или пробросить дальше
        // console.error(`Ошибка ${status}: ${message}`);

        // Пробрасываем ошибку дальше, с кастомным сообщением
        return Promise.reject(new ApiError(message, status));
      }

      return Promise.reject(error);
    }
  );
// }


















// export const loginFetch = (email, password) => {

// return fetch('https://cinemaguide.skillbox.cc/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
// //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//   body: JSON.stringify(
//     {
//         email: "xxx@xxx.ru",
//         password: "1234"
//     }
// ),
//   credentials: 'include', // ⬅️ аналогично axios
// });

// }

// ► Request‑перехватчик: токен авторизации
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('authToken');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// ► Response‑перехватчик: глобальная обработка ошибок
// apiClient.interceptors.response.use(
//   (res) => res,
//   (error) => {
//     // например, выкидываем 401 в стор авторизации
//     // if (err.response?.status === 401) {
//     //   // signOut();
//     // }
//     // единый формат ошибок
//     const customError = {
//       status: error.response?.status,
//       data: error.response?.data,
//       message: error.message,
//     };

//     return Promise.reject(customError);
//   }
// );

// валидация ошибки

// export const ErrorResponseSchema = z.object({
//   message: z.string(),
//   code: z.string().optional(),
//   errors: z.any().optional(),
// });
