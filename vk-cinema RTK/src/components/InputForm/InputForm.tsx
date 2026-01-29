import React from "react";
import "./InputForm.scss";
import { InputFormProps } from "./InputForm.types";
import IconSVG from "../IconSVG";




// const InputForm  = React.ForwardedRef<HTMLInputElement,InputFormProps>(props, ref) => {

//   return (
//     // inputform--error
//     <div className="input-form">
//       <IconSVG className="input-form__svg" icon={type !== "text" ? type : "login"  } />
//       <input ref={ref} className="input-form__input" type={type} placeholder={placeholder}/>
//     </div>
//   );
// };

// export default InputForm;





const InputForm = React.forwardRef<HTMLInputElement, InputFormProps>(
  ({ icon, isError,type="text", placeholder, ...rest }, ref) => {
    return (
      // <div className={"input-form inputform--error"}>
        <div className={`input-form ${isError && "input-form--error"}`}>
        <IconSVG
          className="input-form__svg"
          icon={type !== "text" ? type : icon || "login"}
        />
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