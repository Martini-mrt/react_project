// import { ReactNode } from "react";


export interface TabButtonProps {
  index: number;
  isActive?: boolean;
  btnBuild: {
    title: string;
    icon?: string;
    mobileTitle?: string | undefined;
  }
  onClick: (index: number) => void;
  // children: ReactNode;
}


