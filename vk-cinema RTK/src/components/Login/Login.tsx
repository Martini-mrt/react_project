import React from "react";
import "./Login.scss";
import { LoginProps } from "./Login.types";
import { capitalize } from "../../utils/capitalize";
import MenuElement from "../MenuElement";
import { useLocation, useNavigate } from "react-router";
import { useGetUserProfileQuery, useLoginMutation } from "../../features/user/api/user.api";



const Login: React.FC<LoginProps> = () => {
  

 const navigate = useNavigate();
  const location = useLocation();
  
//  const [login, { error: serverError}] = useLoginMutation();

//  console.log(login, serverError, "my data")

  // RTK Query: берем данные из кэша/сервера
  const { data: user, isLoading, isError } = useGetUserProfileQuery();

  if (isLoading) return <div className="skeleton" style={{ width: 80, height: 40 }} />;

  // Если юзер авторизован (есть данные и нет ошибки)
  if (user && !isError) {
    
    console.log("ок. атвторизован")
    return (
      <MenuElement 
      to={"/profile"} 
      typeElement="link" 
      text={capitalize(user?.name) }
      icon="login"/>
      

    );
  }

      console.log("я не атвторизован", user, isError)

  // Если не авторизован
  return (
    
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
