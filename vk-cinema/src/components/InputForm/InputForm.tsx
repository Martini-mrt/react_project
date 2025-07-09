import React from "react";
import "./InputForm.scss";
import { InputFormProps } from "./InputForm.types";
import IconSVG from "../IconSVG";

const InputForm: React.FC<InputFormProps> = ({ placeholder, type = "text" }) => {


  return (
    // inputform--error
    <div className="input-form">
      <IconSVG className="input-form__svg" icon={type !== "text" ? type : "login"  } />
      <input className="input-form__input" type={type} placeholder={placeholder}/>
    </div>
  );
};

export default InputForm;
