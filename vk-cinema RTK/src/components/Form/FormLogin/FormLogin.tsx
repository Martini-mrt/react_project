import React from "react";
import "../Form.scss";
import { FormLoginProps } from "./FormLogin.types";
import InputForm from "../../InputForm";
import Btn from "../../Btn";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  FormLoginSchema,
  TFormLoginSchema,
} from "../validate/validateFormLogin";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useUserLogin } from "../../../hooks/User/useUser";
import { useLoginMutation } from "../../../features/user/api/user.api";
import { getApiErrorMessage } from "../../../shared/utils/getApiErrorMessage";
import { Navigate, useNavigate } from "react-router";

// todo вынести глобальные ошб ки на уровень мидлваре (нет инета сервер упал)

const FormLogin: React.FC<FormLoginProps> = ({ onGoToReg }) => {
  // const { mutate, error } = useUserLogin();
const navigate = useNavigate();
  const [login, { error: serverError, isLoading }] = useLoginMutation();

  const { register, handleSubmit, formState: {errors} } = useForm<TFormLoginSchema>({
    resolver: zodResolver(FormLoginSchema),
  });

  const errorMessage =
    errors?.email?.message ||
    errors?.password?.message ||
    getApiErrorMessage(serverError);

  const onSubmit: SubmitHandler<TFormLoginSchema> = async (data) => {
    try {
      await login(data).unwrap();
      // Тут navigate...
      // console.log("Успешный вход!");
      navigate('/');
    } catch {
      // Ошибку не пробрасываем, она уже в serverError
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        placeholder="Электронная почта"
        type="email"
        // value={"test@test2.com"}
        defaultValue={"test@test.com"}
        {...register("email")}
        isError={!!errors.email}
      />
      <InputForm
        placeholder="Пароль"
        type="password"
        defaultValue={"d4Sv{3d23f"}
        // value={"d4Sv{3d23f"}
        {...register("password")}
        isError={!!errors.password}
      />

      <div className="form__wrap-btn">
        <Btn styleBtn="primary" text="Войти" type="submit" disabled={isLoading}/>
        <Btn
          styleBtn="onlyText"
          text="Регистрация"
          type="button"
          onClick={onGoToReg}
        />
      </div>

      <p className="form__error-field">{errorMessage}</p>
    </form>
  );
};

export default FormLogin;
