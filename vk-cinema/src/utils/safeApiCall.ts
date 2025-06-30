import { ZodSchema } from "zod";
import axios from "axios";

export type SafeApiSuccess<T> = {
  data: T;
  error: null;
};

export type SafeApiFailure<E> = {
  data: null;
  error: E | string;
};

export type SafeApiResult<T, E = unknown> = SafeApiSuccess<T> | SafeApiFailure<E>;

export async function safeApiCall<TSuccess, TError = unknown>(
  request: () => Promise<unknown>,
  successSchema: ZodSchema<TSuccess>,
  errorSchema?: ZodSchema<TError>
): Promise<SafeApiResult<TSuccess, TError>> {
  try {
    const raw = await request();

    const parsed = successSchema.safeParse(raw);
    if (parsed.success) {
      return { data: parsed.data, error: null };
    }

    return {
      data: null,
      error: "Неверный формат данных от сервера",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error?.response?.data;

      if (errorSchema) {
        const parsedError = errorSchema.safeParse(serverError);
        if (parsedError.success) {
          return {
            data: null,
            error: parsedError.data,
          };
        }
      }

      return {
        data: null,
        error: error.message || "Ошибка запроса",
      };
    }

    return {
      data: null,
      error: "Непредвиденная ошибка",
    };
  }
}





// import { ZodSchema } from "zod";
// import axios from "axios";

// export type SafeApiResult<T> =
//   | { data: T; error: null; }
//   | { data: null; error: T | string; };

// //    | { data: null; error: string };

// export async function safeApiCall<TSuccess, TError >(
//   request: () => Promise<unknown>,
//   successSchema: ZodSchema<TSuccess>,
//   errorSchema?: ZodSchema<TError>
// ): Promise<SafeApiResult<TSuccess | TError>> {
//   try {
//     const res = await request();

// // console.log(successSchema.parse(res))

//     const parsed = successSchema.safeParse(res);
//     // const parsed = successSchema.parse(res);

//     // console.log("Пришло с сервера => ", res)
//     if (parsed.success) {
//       return { data: parsed.data, error: null};
//     }
    
//     // return { data: res, error: parsed};
//     return { data: null, error: "Неверный формат данных от сервера" };
//   } catch (err) {

//     // console.log(err)

//     if (axios.isAxiosError(err)) {
//       const errorData = err?.response?.data;

//       if (errorSchema) {
//         const parsed = errorSchema.safeParse(errorData);
//         if (parsed.success) {
            
//           return { data: null , error: parsed.data };
//         }
//       }

//       return { data: null, error: err.message || "Ошибка запроса" };
//     }

//     return { data: null, error: "Непредвиденная ошибка" };
//   }
// }













// улучьшенная функция

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

// export type SafeApiResult<T, E = unknown> = SafeApiSuccess<T> | SafeApiFailure<E>;

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

//     return {
//       data: null,
//       error: "Неверный формат данных от сервера",
//     };
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       const serverError = error?.response?.data;

//       if (errorSchema) {
//         const parsedError = errorSchema.safeParse(serverError);
//         if (parsedError.success) {
//           return {
//             data: null,
//             error: parsedError.data,
//           };
//         }
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