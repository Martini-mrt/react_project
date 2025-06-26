import { safeApiCall } from "../../utils/safeApiCall";
import { apiClient } from "../axios";

import { z } from "zod";

export const SuccessUserAuthSchema = z.union([
  z.object({ success: z.literal(true) }),
  z.object({ result: z.boolean() }),
]);

export type TSuccessUserAuthSchema = z.infer<typeof SuccessUserAuthSchema>;

export const ErrorUserAuthSchema = z.object({
  error: z.string(),
});

export type TErrorUserAuthSchema = z.infer<typeof ErrorUserAuthSchema>;

// , { withCredentials: true }

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
  password: string
) => {
  return safeApiCall(
    () =>
      apiClient.post("/user", {
        email,
        password,
        name: email,
        surname: email,
      }).then(res => res.data),
    SuccessUserAuthSchema,
    ErrorUserAuthSchema
  );
};





export const getUserProfile = async () => {
  return safeApiCall(
    () =>
      apiClient.get("/profile", { withCredentials: true }).then((res) => {
        console.log(res) 
        return res.data }),

    SuccessUserAuthSchema,
    ErrorUserAuthSchema
  );
};