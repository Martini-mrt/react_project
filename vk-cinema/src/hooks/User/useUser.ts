import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, getUserProfile, login, logout } from "../../api/User/User";
import { wrapQueryFn } from "../../utils/wrapQueryFn";
import { ApiError } from "../../utils/apiError";





// export const useUserLogout = () => {
//   return useMutation({
//     mutationFn: wrapQueryFn(logout),
//   });
// };

export const useUserLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};













export const useUserProfile = () => {
  return useQuery({
    queryKey: ["user", "profile"],
    queryFn: getUserProfile,
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
