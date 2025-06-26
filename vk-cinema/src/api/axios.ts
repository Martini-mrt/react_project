import axios from "axios";
import { z } from "zod";

// инициализируем Axios

// https://cinemaguide.skillbox.cc'
const serverAPI = "/api";

export const apiClient = axios.create({
    withCredentials: true,
  baseURL: serverAPI,
  //   timeout: 8000,
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    // headers: { 'Content-Type': 'application/json' },
  
});




export const loginFetch = (email, password) => {

return fetch('https://cinemaguide.skillbox.cc/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
//   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: JSON.stringify( 
    {
        email: "xxx@xxx.ru", 
        password: "1234"
    }
),
  credentials: 'include', // ⬅️ аналогично axios
});

}  




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
