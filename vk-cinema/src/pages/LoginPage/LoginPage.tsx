import React from 'react';
import './LoginPage.scss';
import { LoginPageProps } from './LoginPage.types';
import Owerlay from '../../layouts/Owerlay';
import ModalWindows from '../../components/ModalWindows';
import FormLogin from '../../components/FormLogin';
import FormRegistration from '../../components/FormRegistration';


// !доделать стиль формы отступы с кнопками
// ! разобраться с окном контента и описанием


const LoginPage: React.FC<LoginPageProps> = ({ children }) => {
  return (
<Owerlay>
  <ModalWindows heading='Регистрация завершина'>

    {/* <FormLogin /> */}

    {/* <FormRegistration /> */}


    <p className='modalwindows__description'>
     Используйте вашу электронную почту для входа
    </p>


  </ModalWindows>
</Owerlay>
  )


};

export default LoginPage;


{/* <div className="loginpage">{children}</div>; */}