import React from "react";
import "./AppLayout.scss";
import { AppLayoutProps } from "./AppLayout.types";
import HeaderLayout from "../HeaderLayout";
import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import SocialList from "../SocialList";
import LoginPage from "../../pages/LoginPage";

const AppLayout: React.FC<AppLayoutProps> = () => {

  return (
    <>
      <HeaderLayout />

      <main>
        <Outlet />
      </main>
     

      <Footer>
        <SocialList />
      </Footer>

      
    </>
  );
};

export default AppLayout;
