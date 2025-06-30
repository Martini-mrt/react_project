import React from "react";
import "./AppLayout.scss";
import { AppLayoutProps } from "./AppLayout.types";
import HeaderLayout from "../HeaderLayout";
import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import SocialList from "../SocialList";

const AppLayout: React.FC<AppLayoutProps> = () => {
  return (
    <>
      <HeaderLayout />
      
      <Outlet />

      <Footer>
        <SocialList />
      </Footer>
    </>
  );
};

export default AppLayout;
