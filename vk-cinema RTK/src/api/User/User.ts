import { safeApiCall } from "../../utils/safeApiCall";
import { apiClient } from "../axios";
import { ErrorSchema } from "../Schema/ErrorSchem";
import { SuccessLoginUserSchema, SuccessProfileUserSchema, SuccessRegistrationsUserSchema } from "../Schema/UserSchem";





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
    SuccessLoginUserSchema,
    ErrorSchema
  );
};

export const logout = async () => {
  return safeApiCall(
    () =>
      apiClient.get("/auth/logout").then(res => res.data),
    SuccessLoginUserSchema,
    ErrorSchema
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
    SuccessRegistrationsUserSchema,
    ErrorSchema
  );
};

export const getUserProfile = async () => {
  return safeApiCall(
    () =>
      apiClient.get("/profile", { withCredentials: true }).then(res => res.data ),
    SuccessProfileUserSchema,
    ErrorSchema
  );
};

// !нужна обветка isAuht => true / false
export const fetchMe = async () => {
  return safeApiCall(
    () =>
      apiClient.get("/profile", { withCredentials: true }).then(res => res.data ),
    SuccessProfileUserSchema,
    ErrorSchema
  );
};