import React from "react";
import "../Form.scss";
import { FormRegistrationProps } from "./FormRegistration.types";
import InputForm from "../../InputForm";
import Btn from "../../Btn";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormRegisterSchema,
  TFormRegisterSchema,
} from "../validate/validateFormRegister";
// import { useUserRegistrations } from "../../../hooks/User/useUser";
import { useCreateUserMutation } from "../../../features/user/api/user.api";
import { getApiErrorMessage } from "../../../shared/utils/getApiErrorMessage";

const FormRegistration: React.FC<FormRegistrationProps> = ({
  onGoToLogin,
  onSuccess,
}) => {
  const [createUser, { error: serverError, isLoading}] = useCreateUserMutation();
  // const { mutate, error } = useUserRegistrations(onSuccess);



  const { register, handleSubmit, formState: { errors } } = useForm<TFormRegisterSchema>({
    resolver: zodResolver(FormRegisterSchema),
    mode: "onBlur", // Валидация при потере фокуса
  });

  
  const errorMessage =
    errors?.email?.message ||
    errors?.name?.message ||
    errors?.surname?.message ||
    errors?.password?.message ||
    errors?.confirmPassword?.message ||
    getApiErrorMessage(serverError);

  const onSubmit: SubmitHandler<TFormRegisterSchema> = async (data) => {
 
    try {
      await createUser(data).unwrap();
      // если функция передана - вызовет ее иначе ничего не делать
      onSuccess?.();
    } catch {
      // Ошибку не пробрасываем, она уже в serverError
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        placeholder="Электронная почта"
        type="email"
        {...register("email")}
        isError={!!errors.email}
      />
      <InputForm
        placeholder="Имя"
        type="text"
        {...register("name")}
        isError={!!errors.name}
      />
      <InputForm
        placeholder="Фамилия"
        type="text"
        {...register("surname")}
        isError={!!errors.surname}
      />
      <InputForm
        placeholder="Пароль"
        type="password"
        {...register("password")}
        isError={!!errors.password}
      />
      <InputForm
        placeholder="Подтвердите пароль"
        type="password"
        {...register("confirmPassword")}
        isError={!!errors.confirmPassword}
      />

      <div className="form__wrap-btn">
        <Btn 
        styleBtn="primary" 
        text={isLoading ? "Создаю..." : "Создать аккаунт"} // Обратная связь 
        type="submit" 
        disabled={isLoading} />
        <Btn
          styleBtn="onlyText"
          type="button"
          text="У меня есть пароль"
          onClick={onGoToLogin}
        />
      </div>
      <p className="form__error-field">{errorMessage}</p>
    </form>
  );
};

export default FormRegistration;
