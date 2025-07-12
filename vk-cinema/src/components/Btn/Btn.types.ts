import { ButtonHTMLAttributes } from "react";

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  like?: boolean;
  styleBtn: "primary" | "default" | "onlyText" | "refresh" | "like";
  className?: string;
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: () => void;
  isLoading?: boolean;
}
