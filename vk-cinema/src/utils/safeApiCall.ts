import { ZodSchema } from "zod";
import axios from "axios";

type SafeApiResult<T> =
  | { data: T; error: null; }
  | { data: null; error: T | string; };

//    | { data: null; error: string };

export async function safeApiCall<TSuccess, TError>(
  request: () => Promise<unknown>,
  successSchema: ZodSchema<TSuccess>,
  errorSchema?: ZodSchema<TError>
): Promise<SafeApiResult<TSuccess | TError>> {
  try {
    const res = await request();
    const parsed = successSchema.safeParse(res);

    console.log(res)
    if (parsed.success) {
      return { data: parsed.data, error: null};
    }
    
    return { data: res, error: null};
    // return { data: null, error: "Неверный формат данных от сервера" };
  } catch (err) {

    if (axios.isAxiosError(err)) {
      const errorData = err?.response?.data;

      if (errorSchema) {
        const parsed = errorSchema.safeParse(errorData);
        if (parsed.success) {
            
          return { data: null , error: parsed.data };
        }
      }

      return { data: null, error: err.message || "Ошибка запроса" };
    }

    return { data: null, error: "Непредвиденная ошибка" };
  }
}