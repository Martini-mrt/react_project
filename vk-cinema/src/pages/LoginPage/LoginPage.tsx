import React from 'react';
import './LoginPage.scss';
import { LoginPageProps } from './LoginPage.types';
import Owerlay from '../../layouts/Owerlay';
import ModalWindows from '../../components/ModalWindows';
import FormLogin from '../../components/FormLogin';
import FormRegistration from '../../components/FormRegistration';


// !сделать формы регистрации и логина


const LoginPage: React.FC<LoginPageProps> = ({ children }) => {
  return (
<Owerlay>
  <ModalWindows>

    {/* <FormLogin /> */}

    <FormRegistration />


  </ModalWindows>
</Owerlay>
  )


};

export default LoginPage;


{/* <div className="loginpage">{children}</div>; */}