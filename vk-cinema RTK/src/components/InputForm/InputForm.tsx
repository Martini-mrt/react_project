import React from "react";
import "./InputForm.scss";
import { InputFormProps } from "./InputForm.types";
import IconSVG from "../IconSVG";



const InputForm = React.forwardRef<HTMLInputElement, InputFormProps>(
  ({ icon, isError,type="text", placeholder, ...rest }, ref) => {

    // Определяем иконку: если передана явно — берем её, 
    // если нет — смотрим на тип инпута, иначе дефолт "login"
    const currentIcon = icon || (type !== "text" ? type : "login");

    return (
      // <div className={"input-form inputform--error"}>
        <div className={`input-form ${isError && "input-form--error"}`}>
         { currentIcon && (
        <IconSVG
          className="input-form__svg"
          icon={currentIcon}
        />
        )}
        <input
          ref={ref}
          className="input-form__input"
          type={type}
          placeholder={placeholder}
          {...rest} // сюда попадают все остальные props от input
        />
      </div>
    );
  }
);

InputForm.displayName = "InputForm"; // важно для DevTools

export default InputForm;