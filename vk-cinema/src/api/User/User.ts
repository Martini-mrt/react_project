import { safeApiCall } from "../../utils/safeApiCall";
import { apiClient } from "../axios";

import { z } from "zod";



// Успешный ответ регистрации
export const SuccessRegistrationsUserSchema = z.object({
   success: z.literal(true)
  });

// Успешный ответ Login  
export const SuccessLoginUserSchema = z.object({
   result: z.boolean() 
  });

// Успешный ответ Profile
export const SuccessProfileUserSchema = z.object({
    email: z.string(),
    favorites: z.array(z.string()),
    name: z.string(),
    surname: z.string(),
  });


export const SuccessUserAuthSchema = z.union([
  SuccessRegistrationsUserSchema,
  SuccessLoginUserSchema,
  SuccessProfileUserSchema 
]);

export type TSuccessUserAuthSchema = z.infer<typeof SuccessUserAuthSchema>;

export const ErrorUserAuthSchema = z.object({
  error: z.string(),
});

export type TErrorUserAuthSchema = z.infer<typeof ErrorUserAuthSchema>;



export const login = async (
  email: string,
  password: string
) => {
  return safeApiCall(
    () =>
      apiClient.post("/auth/login", {
        email,
        password,
      }, { withCredentials: true }).then(res => res.data),
    SuccessUserAuthSchema,
    ErrorUserAuthSchema
  );
};

export const logout = async () => {
  return safeApiCall(
    () =>
      apiClient.get("/auth/logout").then(res => res.data),
    SuccessUserAuthSchema,
    ErrorUserAuthSchema
  );
};

export const createUser = async (
  email: string,
  password: string,
  name: string,
  surname: string
) => {
  return safeApiCall(
    () =>
      apiClient.post("/user", {
        email,
        password,
        name,
        surname,
      }).then(res => res.data),
    SuccessUserAuthSchema,
    ErrorUserAuthSchema
  );
};

export const getUserProfile = async () => {
  return safeApiCall(
    () =>
      apiClient.get("/profile", { withCredentials: true }).then(res => res.data ),
    SuccessUserAuthSchema,
    ErrorUserAuthSchema
  );
};

// !нужна обветка isAuht => true / false
export const fetchMe = async () => {
  return safeApiCall(
    () =>
      apiClient.get("/profile", { withCredentials: true }).then(res => res.data ),
    SuccessUserAuthSchema,
    ErrorUserAuthSchema
  );
};