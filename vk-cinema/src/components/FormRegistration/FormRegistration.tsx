import React from "react";
import "./FormRegistration.scss";
import { FormRegistrationProps } from "./FormRegistration.types";
import InputForm from "../InputForm";
import Btn from "../Btn";

const FormRegistration: React.FC<FormRegistrationProps> = ({ children }) => {
  return (
    <form className="formregistration">
      

      <InputForm placeholder="Электронная почта" type="mail" />
      <InputForm placeholder="Имя" type="text" />
      <InputForm placeholder="Фамилия" type="text" />
      <InputForm placeholder="Пароль" type="text" />
      <InputForm placeholder="Пароль" type="password" />
      <InputForm placeholder="Подтвердите пароль" type="password" />

      <Btn type="primary" text="Создать аккаунт" />
      <Btn type="onlyText" text="Регистрация" />
    </form>
  );
};

export default FormRegistration;
