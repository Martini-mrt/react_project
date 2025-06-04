import { ReactElement, ReactNode } from "react";

// Interface для Tab-компонента
export interface TabProps {
  children: ReactNode;
  btnBuild: {
    title: string;
    mobileTitle: string;

    icon: string;
  };
}

// Типизация для Tabs-компонента
export interface TabsProps {
  // без children компонент невозможен !
  children: ReactElement<TabProps>[]; // массив элементов типа <Tab>
}
