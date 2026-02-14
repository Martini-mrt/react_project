import { useGetUserProfileQuery } from "../api/user.api";


export const useAuthStatus = () => {
  // Вызываем запрос. RTK Query сам решит: взять данные из кэша 
  // или сделать новый запрос (зависит от настроек кэширования)
  const { data: userData, isLoading, isError, isFetching } = useGetUserProfileQuery();

  return {
    userData,                                // Данные из кэша
    isAuth: !!userData && !isError,          // Булево значение залогинен или нет
    isLoading: isLoading || isFetching,      // Идет ли загрузка прямо сейчас
    isError
  };
};