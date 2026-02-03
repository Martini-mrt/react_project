import { Navigate, useLocation } from "react-router";
import { useGetUserProfileQuery } from "../../api/user.api";
import { ProtectedRouteProps } from "./ProtectedRoute.types";



const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  
  // Берем данные профиля. 
  // RTK Query возьмет их из кэша, если они там есть.
  const { data: user, isLoading, isFetching } = useGetUserProfileQuery();

  // Пока идет первичная загрузка — показываем заглушку
  if (isLoading || isFetching) {
    return <div>Загрузка...</div>; 
  }

  if (!user) {
    // Если юзера нет — отправляем на главную, 
    // но в state передаем background, чтобы открылась модалка!
    return (
      <Navigate 
        to="/login" 
        state={{ background: { pathname: "/" } }} 
        replace 
      />
    );
  }

  // Если юзер есть — рендерим страницу профиля
  return <>{children}</>;
};

export default ProtectedRoute;