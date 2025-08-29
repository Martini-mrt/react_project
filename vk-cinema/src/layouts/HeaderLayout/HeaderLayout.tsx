import React from "react";
import "./HeaderLayout.scss";
import { HeaderLayoutProps } from "./HeaderLayout.types";
import Logo from "../../components/Logo";
// import MenuHeader from "../../components/MenuHeader";
import MenuList from "../../components/MenuList";
// import Search from "../../components/Search";
// import Login from "../../components/Login";

const HeaderLayout: React.FC<HeaderLayoutProps> = () => {
  return (
    <header className="headerlayout">
      <div className="container headerlayout__container">
        <Logo />
        <nav className="headerlayout__nav">
          <MenuList />
          {/* <Search /> */}
        </nav>
        
      </div>
    </header>
  );
};

export default HeaderLayout;
