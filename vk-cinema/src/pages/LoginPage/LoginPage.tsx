import React, { useState } from "react";
import "./LoginPage.scss";
import { LoginPageProps } from "./LoginPage.types";
import Owerlay from "../../layouts/Owerlay";
import ModalWindows from "../../components/ModalWindows";
import FormLogin from "../../components/Form/FormLogin";
import FormRegistration from "../../components/Form/FormRegistration";
import SuccessWindowsContent from "../../components/SuccessWindowsContent";

const LoginPage: React.FC<LoginPageProps> = ({ children }) => {
  const [step, setStep] = useState<"login" | "register" | "success">("login");

  const renderContent = () => {
    switch (step) {
      case "login":
        return <FormLogin onGoToReg={() => setStep("register")} />;

      case "register":
        return (
          <FormRegistration
            onGoToLogin={() => setStep("login")}
            onSuccess={() => setStep("success")}
          />
        );
      case "success":
        return (
          <SuccessWindowsContent
            message="Используйте вашу электронную почту для входа"
            onActionsBtn={() => setStep("login")}
          />
        );
    }
  };

  const headingMap = {
    login: null,
    register: "Регистрация",
    success: "Регистрация завершена",
  };

  const heading = headingMap[step];

  return (
    <Owerlay>
      <ModalWindows heading={heading}>
        {renderContent()}

        {/* <FormLogin onGoToReg={() => console.log("wedfewwefw")} /> */}

        {/* {contentWindows.element} */}

        {/* <FormLogin /> */}

        {/* <FormRegistration /> */}

        {/* <p className='modal-windows__description'>
     Используйте вашу электронную почту для входа
    </p> */}
      </ModalWindows>
    </Owerlay>
  );
};

export default LoginPage;
