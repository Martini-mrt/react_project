import React from "react";
import "../Form.scss";
import { FormLoginProps } from "./FormLogin.types";
import InputForm from "../../InputForm";
import Btn from "../../Btn";

const FormLogin: React.FC<FormLoginProps> = ({onGoToReg}) => {

  return (
    <form className="form">
      <InputForm placeholder="Электронная почта" type="mail" />
      <InputForm placeholder="Пароль" type="password" />

      <div className="form__wrap-btn">
        <Btn type="primary" text="Войти" onClick={() => console.log("login")} />
        <Btn type="onlyText" text="Регистрация" onClick={onGoToReg} />
      </div>
    </form>
  );
};

export default FormLogin;
