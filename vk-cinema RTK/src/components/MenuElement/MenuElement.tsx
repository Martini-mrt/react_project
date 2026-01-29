import React from "react";
import "./MenuElement.scss";
import { MenuElementProps } from "./MenuElement.types";
import IconSVG from "../IconSVG";
import Search from "../Search";
import { NavLink, Link } from "react-router";



const MenuElement: React.FC<MenuElementProps> = ({
  text,
  typeElement,
  icon,
  hideToMobile,
  to,
  ...props
}) => {
  switch (typeElement) {
    case "btn":
      return (
        <>
          <button className="menuelement menuelement--desktop" {...props}>{text}</button>
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
          <NavLink to={to? to : ""} className="menuelement menuelement--desktop" {...props}>{text}</NavLink>
          {!hideToMobile && (
            <NavLink to={to? to : ""}  className="menuelement menuelement--mobile" aria-label={text}>
              {icon && <IconSVG icon={icon} className="menuelement__svg" />}
            </NavLink>
          )}
        </>
      );

      // ! search нужно вынести отдельнфй компонент
    case "search":
      return (
        <>
          <Search hideToMobile="true" />

          <button className="menuelement menuelement--mobile" aria-label={text} {...props}>
            {icon && <IconSVG icon={icon} className="menuelement__svg" />}
          </button>
        </>
      );
  }
};

export default MenuElement;
