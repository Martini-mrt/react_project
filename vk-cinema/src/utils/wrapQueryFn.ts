/** 
* Обертка для useQuery {queryFn: () => {} } должен возвращать data и error
*/

import { SafeApiResult } from "./safeApiCall";




export function wrapQueryFn<T>(
  apiCall: () => Promise<SafeApiResult<T>>
): () => Promise<T> {
  return async () => {
    const { data, error } = await apiCall();

    if (error) {
      throw new Error(typeof error === "string" ? error : "Ошибка API");
    }

    if (data == null) {
      throw new Error("Нет данных от API");
    }

    return data;
  };
}