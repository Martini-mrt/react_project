import React from 'react';
import './Logo.scss';
import { LogoProps } from './Logo.types';
import logo from "../../assets/img/logo.svg";

const Logo: React.FC<LogoProps> = () => {
  return <a className="logo" href="/">
    <img className='logo__img' src={logo} alt="Кинотеатр Маруся — логотип" />
  </a>;
};

export default Logo;
