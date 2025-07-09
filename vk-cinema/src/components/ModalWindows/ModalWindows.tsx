import React from "react";
import "./ModalWindows.scss";
import { ModalWindowsProps } from "./ModalWindows.types";

import logo from "../../assets/img/маруся.png";
import IconSVG from "../IconSVG";
import BtnRound from "../BtnRound";
import Btn from "../Btn";

const ModalWindows: React.FC<ModalWindowsProps> = ({  heading, children}) => {
  return <div className="modal-windows">

<BtnRound className="modal-windows__close-btn" icon="close" size="m"/>

<div className="modal-windows__wrap-logo">
   <img className="modal-windows__logo" src={logo} alt="Логотип маруся" />
  </div>

  { heading && <h2 className="modal-windows__heading">{heading}</h2> } 

  {children}

  
  
  </div>;
};

export default ModalWindows;
