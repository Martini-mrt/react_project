import React from "react";
import "../Form.scss";
import { FormLoginProps } from "./FormLogin.types";
import InputForm from "../../InputForm";
import Btn from "../../Btn";
import { FieldValue, SubmitHandler, useForm } from "react-hook-form";
import {
  FormLoginSchema,
  TFormLoginSchema,
} from "../validate/validateFormLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserLogin } from "../../../hooks/User/useUser";

//! щас меняю тип кнопок потом нужно разобраться с полями как сделны Input

// сделать контролируемые поля

// вывод ошибок в форму

const FormLogin: React.FC<FormLoginProps> = ({ onGoToReg }) => {
  const { register, handleSubmit, formState } = useForm<TFormLoginSchema>({
    resolver: zodResolver(FormLoginSchema),
  });

  const { errors } = formState;
  // console.log(errors);

  const {mutate, error} = useUserLogin();

 console.log(error?.message)

  const errorMessage = errors?.email?.message || errors?.password?.message || error?.message;

  const onSubmit: SubmitHandler<TFormLoginSchema> = (data) => {
    // console.log(data);
    mutate(data)
     
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
        placeholder="Пароль"
        type="password"
        {...register("password")}
        isError={errors?.password}
      />

      <div className="form__wrap-btn">
        <Btn styleBtn="primary" text="Войти" type="submit" />
        <Btn
          styleBtn="onlyText"
          text="Регистрация"
          type="button"
          onClick={onGoToReg}
        />
      </div>

      <p className="form__error-field">{errorMessage && errorMessage}</p>
    </form>
  );
};

export default FormLogin;
