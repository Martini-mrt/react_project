import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, getUserProfile, login, logout } from "../../api/User/User";
import { wrapQueryFn } from "../../utils/wrapQueryFn";

export const useUserLogout = () => {
  return useMutation({
    mutationFn: wrapQueryFn(logout),
  });
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["user", "profile"],
    queryFn: wrapQueryFn(getUserProfile),
  });
};

export const useUserLogin = () => {
  return useMutation({
    mutationKey: ["auth", "login"],
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      wrapQueryFn(() => login(email, password))(),
  });
};

export const useUserRegistrations = () => {
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
    }) => wrapQueryFn(() => createUser(email, password, name, surname))(),
  });
};
