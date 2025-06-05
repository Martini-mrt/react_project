import React from "react";
import "./AccountContent.scss";
import { AccountContentProps } from "./AccountContent.types";
import Btn from "../Btn";

const AccountContent: React.FC<AccountContentProps> = ({
  children,
  className,
}) => {
  return <div className={`accountcontent ${className}`}>
    {children}
    <Btn className="accountcontent__btn" type="primary" text="Выйти из аккаунта"/>
    </div>;
};

export default AccountContent;
