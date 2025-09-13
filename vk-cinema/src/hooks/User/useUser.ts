import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, fetchMe, getUserProfile, login, logout } from "../../api/User/User";
import { wrapQueryFn } from "../../utils/wrapQueryFn";
import { ApiError } from "../../utils/apiError";
import { queryClient } from "../../api/queryClient";


// todo передалать хуки подстроить под Авторизацию !!!!


// export const useUserLogout = () => {
//   return useMutation({
//     mutationFn: wrapQueryFn(logout),
//   });
// };

export const useUserLogout = () => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      console.log("logout")
      // 
      // скидывем кеш - тем самым делаем ререндер по опдписке на это состояние
      queryClient.setQueryData(["auth","me"], null);
      // удаляем данные профиля пользователя
      queryClient.removeQueries({queryKey: ["user", "profile"]}); 
    }
  });
};


export const useUserProfile = () => {
  return useQuery({
    queryKey: ["user", "profile"],
    queryFn: getUserProfile,
  });
};

export const useUserMe = () => {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: fetchMe,
    retry: false,
  });
};

// export const useUserLogin = () => {
//   return useMutation({
//     mutationKey: ["auth", "login"],
//     mutationFn: ({ email, password }: { email: string; password: string }) =>
//       wrapQueryFn(() => login(email, password))(),
//   });
// };


export const useUserLogin = () => {
  return useMutation({
    mutationKey: ["auth", "login"],
    mutationFn: ({ email, password }: { email: string; password: string }) => login(email, password),
    onSuccess: (data) => {
      console.log(data, "данные с login")

     
     //  делаем инвалидацию ключей - перезапрашиваем данные
      queryClient.invalidateQueries({
        queryKey: ["auth","me"]
      })
      // queryClient.setQueryData(["auth","me"], data)
    }
  //    onError: (error) => {
  //   // An error happened!
  //   // console.log(error.status)
    
  //   if (error?.status === 400) throw new ApiError("Не правильный логин или пароль", error?.status)
    
  // },
  });
};


export const useUserRegistrations = (handleSuccess?: ()=> void) => {
  return useMutation({
    mutationKey: ["auth", "registrations"],
    mutationFn: ({
      email,
      password,
      name,
      surname,
    }: {
      email: string;
      password: string;
      name: string;
      surname: string;
    }) =>  createUser(email, password, name, surname),

    onSuccess: handleSuccess

  });




};



