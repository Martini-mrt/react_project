import React from "react";
import "./Login.scss";
import { LoginProps } from "./Login.types";
import { useUserProfile } from "../../hooks/User/useUser";
import { capitalize } from "../../utils/capitalize";
import { useDispatch } from "react-redux";
import { openAuthModal } from "../../store/sliceModal";

const Login: React.FC<LoginProps> = ({ children }) => {
  // блок входа потм убрать
  //  const mutate = useUserLogin();

  //todo нужно узнать аторизован ли пользователь

  const userProfile = useUserProfile();



// меняем данные стейта
  const dispatch = useDispatch();


  const testDispatch = () => {
    //  console.log("sdssdsds")
     

    //  const clatch: modalAuthState = true;

    //  dispatch(modalAuthActions.setModalAuth({showModal: true}))
  }

  //  const { data  } = useUserProfile();






  console.log(userProfile);

  let text = "Войти";
  let typeElement = "btn";
  let onClick = ()=>{};


  const to = "/profile";

  //  console.log(className)
  // userProfile.isSuccess
  if (userProfile.isSuccess) {
    text = capitalize(userProfile.data.name);
    typeElement = "link";
  } else {
   onClick = () => dispatch(openAuthModal())
  }

  // onClick={() => dispatch(openAuthModal())}

  // const extraProps = {

  // }

  // const text = "sdsddsd"

  return React.cloneElement(children, {
    // text: userProfile.isSuccess? "есть авторизация" : "Войти",
    text,
    typeElement,
    to,
    onClick,
  });
};

export default Login;
