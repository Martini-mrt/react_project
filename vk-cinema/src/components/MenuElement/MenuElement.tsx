import React from "react";
import "./MenuElement.scss";
import { MenuElementProps } from "./MenuElement.types";
import IconSVG from "../IconSVG";
import Search from "../Search";



const MenuElement: React.FC<MenuElementProps> = ({
  text,
  typeElement,
  icon,
  hideToMobile
}) => {
  switch (typeElement) {
    case "btn":
      return (
        <>
          <button className="menuelement menuelement--desktop">{text}</button>
          {!hideToMobile && (
            <button
              className="menuelement menuelement--mobile"
              aria-label={text}
            >
              {icon && <IconSVG icon={icon} className="menuelement__svg" />}
            </button>
          )}
        </>
      );

    case "link":
      return (
        <>
          <a className="menuelement menuelement--desktop">{text}</a>
          {!hideToMobile && (
            <a className="menuelement menuelement--mobile" aria-label={text}>
              {icon && <IconSVG icon={icon} className="menuelement__svg" />}
            </a>
          )}
        </>
      );

    case "search":
      return (
        <>
          <Search hideToMobile="true" />

          <button className="menuelement menuelement--mobile" aria-label={text}>
            {icon && <IconSVG icon={icon} className="menuelement__svg" />}
          </button>
        </>
      );
  }
};

export default MenuElement;
