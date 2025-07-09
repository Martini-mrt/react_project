import React from "react";
import "../Form.scss";
import { FormRegistrationProps } from "./FormRegistration.types";
import InputForm from "../../InputForm";
import Btn from "../../Btn";

const FormRegistration: React.FC<FormRegistrationProps> = ({ onGoToLogin, onSuccess }) => {
  return (
    <form className="form">
      <InputForm placeholder="Электронная почта" type="mail" />
      <InputForm placeholder="Имя" type="text" />
      <InputForm placeholder="Фамилия" type="text" />
      <InputForm placeholder="Пароль" type="text" />
      <InputForm placeholder="Пароль" type="password" />
      <InputForm placeholder="Подтвердите пароль" type="password" />

      <div className="form__wrap-btn">
        <Btn type="primary" text="Создать аккаунт" onClick={onSuccess} />
        <Btn type="onlyText" text="У меня есть пароль" onClick={onGoToLogin} />
      </div>
    </form>
  );
};

export default FormRegistration;
