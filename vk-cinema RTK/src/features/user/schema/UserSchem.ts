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

