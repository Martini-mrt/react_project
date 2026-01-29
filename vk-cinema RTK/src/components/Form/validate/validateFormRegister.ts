import { z } from "zod";

export const FormRegisterSchema = z.object({
    email: z.string().email("Введите корректный email"),
    name: z.string().min(2,"Введите имя"),
    surname: z.string().min(2,"Введите фамилию"),
    password: z.string().min(6,"Введите пароль"),
    confirmPassword: z.string().min(6,"Подтвердите пароль"),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // указываем где ошибка
    message: "Пароли не совпадают",
})

export type TFormRegisterSchema = z.infer<typeof FormRegisterSchema>;