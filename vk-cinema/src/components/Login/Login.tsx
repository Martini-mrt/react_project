import React from "react";
import "./Login.scss";
import { LoginProps } from "./Login.types";
import { useUserMe, useUserProfile } from "../../hooks/User/useUser";
import { capitalize } from "../../utils/capitalize";
import { useDispatch } from "react-redux";
import { openAuthModal } from "../../store/sliceModal";
import { useNavigate } from "react-router";

const Login: React.FC<LoginProps> = ({ children }) => {
  // блок входа потм убрать
  //  const mutate = useUserLogin();
const navigate = useNavigate();
  //todo нужно узнать аторизован ли пользователь

  const userProfile = useUserMe();

  console.log(userProfile);

// меняем данные стейта
  const dispatch = useDispatch();


  const testDispatch = () => {
    //  console.log("sdssdsds")
     

    //  const clatch: modalAuthState = true;

    //  dispatch(modalAuthActions.setModalAuth({showModal: true}))
  }

  //  const { data  } = useUserProfile();

  let text = "Войти";
  let typeElement = "btn";
  let onClick = ()=>{};


  const to = "/profile";

  //  console.log(className)
  // userProfile.isSuccess
  console.log("render")
  if (userProfile.isSuccess) {
    text = capitalize(userProfile.data.name) + "rrr";
    typeElement = "link";
  } else {
  //  onClick = () => dispatch(openAuthModal())
   onClick = () => navigate("/login")
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
