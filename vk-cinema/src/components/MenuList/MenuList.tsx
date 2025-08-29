import React from "react";
import "./MenuList.scss";
import { MenuListProps } from "./MenuList.types";
// import Login from "../Login";
import MenuElement from "../MenuElement";
import { useDispatch } from "react-redux";
import { modalAuthActions, modalAuthState } from "../../store/slice";
import { useUserProfile } from "../../hooks/User/useUser";
import { closeAuthModal, openAuthModal } from "../../store/sliceModal";
import Login from "../Login";



const MenuList: React.FC<MenuListProps> = () => {



       
    //  console.log("nav =>",data)

  return (
    <>
      <ul className="menulist">
        <li className={"menulist__item"}>
          {/* <a className="menulist__link" href="#">
            Главная
          </a> */}
          <MenuElement to={"/"} typeElement="link" text="Главная" hideToMobile="true"/>
        </li>
        <li className={"menulist__item"}>
          {/* <a className="menulist__link" href="#">
            Жанры
          </a> */}
          <MenuElement to={"/genre"} typeElement="link" text="Жанры" icon="genre"/>
        </li>

        <li className="menulist__item menulist__item--grow">
        <MenuElement typeElement="search" icon="search" />
        </li>

        <li className={"menulist__item"}>
          {/* тут нужно сделать оберку логин */}
          <Login>
             <MenuElement typeElement="btn"  text="Войти" icon="login"/>
          </Login>

          
        </li>
      </ul>
    </>
  );
};

export default MenuList;
