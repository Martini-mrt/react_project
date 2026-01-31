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
import { useLoginMutation } from "../../../features/user/api/user.api";

// todo вынести глобальные ошб ки на уровень мидлваре (нет инета сервер упал)

//! щас меняю тип кнопок потом нужно разобраться с полями как сделны Input

// сделать контролируемые поля

// вывод ошибок в форму

const FormLogin: React.FC<FormLoginProps> = ({ onGoToReg }) => {
  // const { mutate, error } = useUserLogin();

  const [login, { error }] = useLoginMutation();


  const { register, handleSubmit, formState } = useForm<TFormLoginSchema>({
    resolver: zodResolver(FormLoginSchema),
  });

  const { errors } = formState;
  // console.log(errors);

  console.log(error);

 


  const onSubmit: SubmitHandler<TFormLoginSchema> = async (data) => {
    // console.log(data);
    // mutate(data);

try {
      //  login(data);
       await login(data).unwrap();
  
  } catch (err: any) {
    //err здесь — это либо ошибка от Zod, либо ошибка от сервера
    if (err.status === 400) {
     
       console.log("Неверный пароль, попробуйте еще раз")
    } else {
  
       console.log("Произошла системная ошибка. Мы уже чиним!")
    }
  }

 const errorMessage =
    errors?.email?.message || errors?.password?.message;
        // errors?.email?.message || errors?.password?.message || error?.message;

  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        placeholder="Электронная почта"
        type="email"
        // value={"test@test2.com"}
        defaultValue={"test@test.com"}
        {...register("email")}
        isError={errors?.email}
      />
      <InputForm
        placeholder="Пароль"
        type="password"
        defaultValue={"d4Sv{3d23f"}
        // value={"d4Sv{3d23f"}
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




// // Получаем ошибки из формы и из мутации
// const { errors } = formState;
// const [login, { error: serverError }] = useLoginMutation();

// const getErrorMessage = () => {
//   // 1. Приоритет ошибкам валидации полей
//   if (errors.email?.message) return errors.email.message;
//   if (errors.password?.message) return errors.password.message;

//   // 2. Если поля валидны, проверяем ошибку от сервера
//   if (serverError) {
//     if ("status" in serverError) {
//       // Здесь обрабатываем конкретные коды ответов
//       switch (serverError.status) {
//         case 401: return "Неверный логин или пароль";
//         case 400: return "Ошибка в запросе (проверьте данные)";
//         case 500: return "Ошибка сервера, попробуйте позже";
//         default: return "Произошла непредвиденная ошибка";
//       }
//     }
//     // Если ошибка пришла из transformResponse (throw new Error)
//     if ("message" in serverError) return (serverError as any).message;
//   }

//   return null;
// };

// const errorMessage = getErrorMessage();





// const { watch } = useForm<TFormLoginSchema>();
// const [login, { reset }] = useLoginMutation();

// // Следим за изменениями полей и сбрасываем ошибку сервера
// React.useEffect(() => {
//   const subscription = watch(() => {
//     if (serverError) reset();
//   });
//   return () => subscription.unsubscribe();
// }, [watch, serverError, reset]);