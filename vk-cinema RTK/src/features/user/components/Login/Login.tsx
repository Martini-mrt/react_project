import React from "react";
import "./Login.scss";
import { LoginProps } from "./Login.types";
import { capitalize } from "../../../../utils/capitalize";
import MenuElement from "../../../../components/MenuElement";
import { useLocation, useNavigate } from "react-router";
// import { useGetUserProfileQuery, useLoginMutation } from "../../../api/user.api";
import { useAuthStatus } from "../../hooks/useAuthStatus";



const Login: React.FC<LoginProps> = () => {
  

 const navigate = useNavigate();
  const location = useLocation();
  
//  const [login, { error: serverError}] = useLoginMutation();

//  console.log(login, serverError, "my data")

  // RTK Query: берем данные из кэша/сервера
  // const { data: user, isLoading, isError } = useGetUserProfileQuery();

  const { userData ,isAuth, isLoading } = useAuthStatus();

  // ! переделать или убрать
  if (isLoading) return <div className="skeleton" style={{ width: 80, height: 40 }} />;

  // Если юзер авторизован (есть данные и нет ошибки)
  if (isAuth) {
    
    console.log("ок. атвторизован")
    return (
      <MenuElement 
      to={"/profile"} 
      typeElement="link" 
      text={capitalize(userData?.name || "") }
      icon="login"/>
      

    );
  }

  // Если не авторизован
  return (
    // !переписать кнопки на мобилке не плохоработают
    <MenuElement 
      to={"/profile"} 
      typeElement="btn" 
      icon="login"
      text={"Войти"}
      onClick={() => navigate("/login", { state: { background: location } })} 
      />
  );

};

export default Login;
