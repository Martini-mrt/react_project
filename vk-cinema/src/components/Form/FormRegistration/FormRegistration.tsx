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
import { useUserRegistrations } from "../../../hooks/User/useUser";

const FormRegistration: React.FC<FormRegistrationProps> = ({
  onGoToLogin,
  onSuccess,
}) => {
  const { mutate, error } = useUserRegistrations(onSuccess);

  const { register, handleSubmit, formState } = useForm<TFormRegisterSchema>({
    resolver: zodResolver(FormRegisterSchema),
  });

  const { errors } = formState;
  const errorMessage =
    errors?.email?.message ||
    errors?.name?.message ||
    errors?.surname?.message ||
    errors?.password?.message ||
    errors?.confirmPassword?.message ||
    error?.message;

  const onSubmit: SubmitHandler<TFormRegisterSchema> = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        placeholder="Электронная почта"
        type="email"
        {...register("email")}
        isError={errors?.email}
      />
      <InputForm
        placeholder="Имя"
        type="text"
        {...register("name")}
        isError={errors?.name}
      />
      <InputForm
        placeholder="Фамилия"
        type="text"
        {...register("surname")}
        isError={errors?.surname}
      />
      <InputForm
        placeholder="Пароль"
        type="password"
        {...register("password")}
        isError={errors?.password}
      />
      <InputForm
        placeholder="Подтвердите пароль"
        type="password"
        {...register("confirmPassword")}
        isError={errors?.confirmPassword}
      />

      <div className="form__wrap-btn">
        <Btn styleBtn="primary" text="Создать аккаунт" type="submit" />
        <Btn
          styleBtn="onlyText"
          type="button"
          text="У меня есть пароль"
          onClick={onGoToLogin}
        />
      </div>
      <p className="form__error-field">{errorMessage && errorMessage}</p>
    </form>
  );
};

export default FormRegistration;
