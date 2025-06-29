/**
 * Хук обвертка для запросов
 */
// ! пока не нужно


import {
    QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";


// Интерфейс для параметров
export interface UseApiQueryParams<TData, TError = unknown> {
  key: QueryKey;
  queryFn: () => Promise<TData>;
  options?: Omit<UseQueryOptions<TData, TError, TData, QueryKey>, "queryKey" | "queryFn">;
}

// Универсальный хук
export const useApiQuery = <TData, TError = unknown>(
  params: UseApiQueryParams<TData, TError>
): UseQueryResult<TData, TError> => {
  const { key, queryFn, options } = params;

  return useQuery<TData, TError>({
    queryKey: key,
    queryFn,
    ...(options || {}),
  });
};
