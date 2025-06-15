import React from "react";
import "./ModalWindows.scss";
import { ModalWindowsProps } from "./ModalWindows.types";

import logo from "../../assets/img/маруся.png";
import IconSVG from "../IconSVG";
import BtnRound from "../BtnRound";

const ModalWindows: React.FC<ModalWindowsProps> = ({ children }) => {
  return <div className="modalwindows">



<BtnRound className="modalwindows__close-btn" icon="close" size="m"/>

<div className="modalwindows__wrap-logo">
   <img className="modalwindows__logo" src={logo} alt="Логотип маруся" />
  </div>

  {children}
  
  </div>;
};

export default ModalWindows;
