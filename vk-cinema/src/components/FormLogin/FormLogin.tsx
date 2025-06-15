import React from 'react';
import './FormLogin.scss';
import { FormLoginProps } from './FormLogin.types';
import InputForm from '../InputForm';
import Btn from '../Btn';

const FormLogin: React.FC<FormLoginProps> = () => {
  return <form className="formlogin" >

  

  <InputForm placeholder='Электронная почта' type='mail' />
  <InputForm placeholder='Пароль' type='password' />

  <Btn type="primary" text='Войти'/>
  </form>;
};

export default FormLogin;
