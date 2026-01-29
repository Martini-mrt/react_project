import React, { useState } from "react";
import "./LoginPage.scss";
import { LoginPageProps } from "./LoginPage.types";
import Overlay from "../../layouts/Overlay";
import ModalWindows from "../../components/ModalWindows";
import FormLogin from "../../components/Form/FormLogin";
import FormRegistration from "../../components/Form/FormRegistration";
import SuccessWindowsContent from "../../components/SuccessWindowsContent";
import Portal from "../../components/Portal";

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
    <Portal className="portal-overlay">
      {/* <Overlay> */}
        <ModalWindows heading={heading}>{renderContent()}</ModalWindows>
      {/* </Overlay> */}
    </Portal>
  );
};

export default LoginPage;
