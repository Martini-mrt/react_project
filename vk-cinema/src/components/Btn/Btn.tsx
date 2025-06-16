import React from "react";
import "./Btn.scss";
import { BtnProps } from "./Btn.types";
import IconSVG from "../IconSVG";

const Btn: React.FC<BtnProps> = ({ text, type, like, className = "" }) => {
  switch (type) {
    case "primary":
    case "default":
    case "onlyText":
      return (
        <button className={`btn ${type} ${className}`} type="button">
          {text}
        </button>
      );

    case "refresh":
      return (
        <button className={`btn default icon-btn ${className}`} type="button">
            <IconSVG icon="refresh" className="btn__svg" />
        </button>
      );

    case "like":
      return (
        <button className={`btn default icon-btn ${className}`} type="button">
          {like ? (
            <IconSVG icon="likeFill" className="btn__svg" />
          ) : (
            <IconSVG icon="like" className="btn__svg" />
          )}
        </button>
      );
  }
};

export default Btn;
