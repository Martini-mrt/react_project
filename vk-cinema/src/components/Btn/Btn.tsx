import React from "react";
import "./Btn.scss";
import { BtnProps } from "./Btn.types";
import IconSVG from "../IconSVG";

// TODO потом улучьшить компонент

const Btn: React.FC<BtnProps> = ({ text, type, like, className = "", onClick , isLoading}) => {
  switch (type) {
    case "primary":
    case "default":
    case "onlyText":
      return (
        <button className={`btn ${type} ${className}`} type="button" onClick={onClick}>
          {isLoading ? 'Загрузка...' : text}
        </button>
      );

    case "refresh":
      return (
        <button className={`btn default icon-btn ${className}`} type="button" onClick={onClick}>
            <IconSVG icon="refresh" className="btn__svg" />
        </button>
      );

    case "like":
      return (
        <button className={`btn default icon-btn ${className}`} type="button" onClick={onClick}>
          {like ? (
            <IconSVG icon="likeFill" className="btn__svg" />
          ) : (
            <IconSVG icon="like" className="btn__svg" />
          )}
        </button>
      );

      default:
        return null;
  }
};

export default Btn;
