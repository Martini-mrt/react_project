import React from 'react';
import './Logo.scss';
import { LogoProps } from './Logo.types';
import logo from "../../assets/img/logo.svg";
import { NavLink } from 'react-router';

const Logo: React.FC<LogoProps> = () => {
  return <NavLink className="logo" to={"/"}>
    <img className='logo__img' src={logo} alt="Кинотеатр Маруся — логотип" />
  </NavLink>;
};

export default Logo;




