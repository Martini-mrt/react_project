import { safeApiCall } from "../../utils/safeApiCall";
import { apiClient } from "../axios";
import { ErrorSchema } from "../Schema/ErrorSchem";
import { MoviesSchemaList } from "../../features/movie/schema/MoviesSchem";
import { SuccessLoginUserSchema } from "../../features/user/schema/UserSchem";

export const getFavorites = async () => {
  return safeApiCall(
    () => apiClient.get("/favorites").then((res) => res.data),
    MoviesSchemaList,
    ErrorSchema
  );
};

export const addToFavorites = async (id: string) => {
  return safeApiCall(
    () => apiClient.post("/favorites", { id }).then((res) => res.data),
    SuccessLoginUserSchema,
    ErrorSchema
  );
};

export const deleteFavorites = async (id: string) => {
  return safeApiCall(
    () => apiClient.delete(`/favorites/${id}`).then((res) => res.data),
    SuccessLoginUserSchema,
    ErrorSchema
  );
};
