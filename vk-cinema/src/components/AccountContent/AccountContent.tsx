import React from "react";
import "./AccountContent.scss";
import { AccountContentProps } from "./AccountContent.types";
import Btn from "../Btn";

const AccountContent: React.FC<AccountContentProps> = ({
  children,
  className,
  handleLogout
}) => {
  return <div className={`account-content ${className}`}>
    {children}
    
    <Btn className="account-content__btn" type="primary" text="Выйти из аккаунта" onClick={handleLogout}/>
    </div>;
};

export default AccountContent;
