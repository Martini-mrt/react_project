import { ZodSchema } from "zod";
import axios from "axios";
import { ApiError } from "./apiError";

// export type SafeApiSuccess<T> = {
//   data: T;
//   // error: null;
// };

// export type SafeApiFailure<E> = {
//   data: null;
//   error: E | string;
// };

// export type SafeApiResult<T> =
//   | SafeApiSuccess<T>;
//   // | SafeApiFailure<E>;

export async function safeApiCall<TSuccess, TError = unknown>(
  request: () => Promise<unknown>,
  successSchema: ZodSchema<TSuccess>,
  errorSchema?: ZodSchema<TError>
): Promise<TSuccess> {
  try {
    const raw = await request();

    const parsed = successSchema.safeParse(raw);

    if (!parsed.success) throw new Error("Некорректные данные от сервера");

    return parsed.data;
  } catch (error: unknown) {
    
    if (axios.isAxiosError(error)) {
      const serverError = error?.response?.data;

      if (errorSchema) {
        const parsedError = errorSchema.safeParse(serverError);

        if (!parsedError.success)
          throw new ApiError("Некорректные данные от сервера");
      }
    }

    // Обработка прочих ошибок
    if (error instanceof Error) throw new ApiError(error.message);
    
  }

  throw new ApiError("Неизвестная ошибка");
}

// import { ZodSchema } from "zod";
// import axios from "axios";

// export type SafeApiSuccess<T> = {
//   data: T;
//   error: null;
// };

// export type SafeApiFailure<E> = {
//   data: null;
//   error: E | string;
// };

// export type SafeApiResult<T, E = unknown> =
//   | SafeApiSuccess<T>
//   | SafeApiFailure<E>;

// export async function safeApiCall<TSuccess, TError = unknown>(
//   request: () => Promise<unknown>,
//   successSchema: ZodSchema<TSuccess>,
//   errorSchema?: ZodSchema<TError>
// ): Promise<SafeApiResult<TSuccess, TError>> {
//   try {
//     const raw = await request();

//     const parsed = successSchema.safeParse(raw);

//     if (parsed.success) {
//       return { data: parsed.data, error: null };
//     }

//     console.log(parsed.error.errors);
//     return {
//       data: null,
//       error: "Неверный формат данных от сервера",
//       // error: parsed.error.errors
//     };
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       const serverError = error?.response?.data;

//       // console.log(serverError)

//       if (errorSchema) {
//         const parsedError = errorSchema.safeParse(serverError);

//        console.log(parsedError)

//         if (parsedError.success) {
//           // console.log("данные отб ошибке пришли",parsedError.data)
//           return {
//             data: null,
//             error: parsedError.data,
//           };
//         }

//         return {
//           data: null,
//           error: "Неверный формат данных от сервера в ответе об ошибке",
//         };
//       }

//       return {
//         data: null,
//         error: error.message || "Ошибка запроса",
//       };
//     }

//     return {
//       data: null,
//       error: "Непредвиденная ошибка",
//     };
//   }
// }
