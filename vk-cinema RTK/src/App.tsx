// import MainPage from "./pages/MainPage";

import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer";
import HeaderLayout from "./layouts/HeaderLayout";
import SocialList from "./layouts/SocialList";
import ProfilePage from "./pages/ProfilePage";
import MoviePage from "./pages/MoviePage";
import GenrePage from "./pages/GenrePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MoviesByGenrePage from "./pages/MoviesByGenrePage";
import AppLayout from "./layouts/AppLayout";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useUserProfile } from "./hooks/User/useUser";
import ModalWindows from "./components/ModalWindows";
import ModalContainer from "./components/ModalContainer";
import ProtectedRoute from "./features/user/components/ProtectedRoute";

// link
// <link to={'/link'}>name</link>

// Hook
// const navigate =useNavigate()
// как работать с хуком
// navigate("/link")

// ! остановился что нужно сделать:
//  модалку со стейт менеджером -
// модалку помещать в портал а компнент подроутерами

//  поменстить хук fetch me - и дедлать логику в отображения
// поместть хук fetch me в favorites - и сравнивать там массив с id
// протектед роут - там тоже сверяемся с хуком

function App() {
  const location = useLocation();

  // Достаем фоновую локацию из стейта.
  // Мы ее передадим позже при клике на кнопку "Войти".
  const background = location.state?.background;

  return (
    <>
      {/* СЛОЙ 1: ОСНОВНОЙ КОНТЕНТ (то, что под модалкой) */}
      {/* Если background есть, Routes будет "думать", что мы всё еще на старой странице */}

      <Routes location={background || location}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/genre" element={<GenrePage />} />
          <Route path="/genre/:genre" element={<MoviesByGenrePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />

          {/* создать прослойку элемент проверяюший авторизацию */}
          {/* Страница профиля (потом обернуть в ProtectedRoute)!!!! */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          {/* Путь для логина "на весь экран" (если зашли по прямой ссылке) */}
          <Route path="/login" element={<LoginPage />} />

          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>

      {/* СЛОЙ 2: МОДАЛЬНЫЙ (ПОВЕРХ) */}
      {/* Этот блок рендерится ТОЛЬКО если мы открыли модалку кликом */}
      {background && (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* Сюда же можно добавить /register, если нужно */}
        </Routes>
      )}
    </>
  );
}

export default App;

// todo сделать хук useAuth() - по идее такойже что profile - точне по такому же пути
// export const useAuth = () =>
//   useQuery({
//     queryKey: ['auth', 'me'],
//     queryFn: async () => {
//       const res = await axios.get('/api/me', { withCredentials: true });
//       return res.data;
//     },
//     retry: false,
//   });

// todo скинуть кеш после валидации
// queryClient.invalidateQueries({ queryKey: ['auth', 'me'] });

// todo реализовать protectedRoute

// export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
//   const { data: user, isLoading } = useAuth();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!isLoading && !user) {
//       dispatch(openLoginModal());
//     }
//   }, [isLoading, user, dispatch]);

//   if (isLoading) return <p>Loading...</p>;
//   if (!user) return null; // блокируем контент

//   return children;
// };

// todo модальное окно
// только нужно помежать в портал за пределами приложиния

// import { useDispatch, useSelector } from 'react-redux';
// import { closeLoginModal } from '../store/uiSlice';
// import { RootState } from '../store/store';

// export const LoginModal = () => {
//   const dispatch = useDispatch();
//   const isOpen = useSelector((state: RootState) => state.ui.isLoginModalOpen);

//   if (!isOpen) return null;

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Login</h2>
//         {/* логика формы логина */}
//         <button onClick={() => dispatch(closeLoginModal())}>Close</button>
//       </div>
//     </div>
//   );
// };
