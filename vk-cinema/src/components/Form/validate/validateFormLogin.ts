import { z } from "zod";

export const FormLoginSchema = z.object({
  email: z.string().email("Введите корректный email"),
  password: z.string().min(1, "Введите пароль"),

  // .nonempty("Поле не должно быть пустым")
});

export type TFormLoginSchema = z.infer<typeof FormLoginSchema>;
