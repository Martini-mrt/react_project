import axios from "axios";

// инициализируем Axios

const serverAPI = "https://cinemaguide.skillbox.cc";

export const apiClient = axios.create({
  baseURL: serverAPI,
//   timeout: 8000,
//   headers: { 'Content-Type': 'application/json' },
});

// ► Request‑перехватчик: токен авторизации
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('authToken');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });


// ► Response‑перехватчик: глобальная обработка ошибок
apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    // например, выкидываем 401 в стор авторизации
    if (err.response?.status === 401) {
      // signOut();
    }
    return Promise.reject(err);
  }
);