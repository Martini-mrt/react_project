import React from "react";
import "./MenuList.scss";
import { MenuListProps } from "./MenuList.types";
// import Login from "../Login";
import MenuElement from "../MenuElement";



const MenuList: React.FC<MenuListProps> = ({active}) => {



  return (
    <>
      <ul className="menulist">
        <li className={`menulist__item ${active === 0 ? "active" : "" }`}>
          {/* <a className="menulist__link" href="#">
            Главная
          </a> */}
          <MenuElement typeElement="link" text="Главная" hideToMobile="true"/>
        </li>
        <li className={`menulist__item ${active === 1 ? "active" : "" }`}>
          {/* <a className="menulist__link" href="#">
            Жанры
          </a> */}
          <MenuElement typeElement="link" text="Жанры" icon="genre"/>
        </li>

        <li className="menulist__item menulist__item--grow">
        <MenuElement typeElement="search" icon="search" />
        </li>

        <li className={`menulist__item ${active === 2 ? "active" : "" }`}>
          <MenuElement typeElement="btn"  text="Войти" icon="login"/>
        </li>
      </ul>
    </>
  );
};

export default MenuList;
