import { ButtonHTMLAttributes } from "react";


export interface BtnRoundProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  size?: "s" | "m" | "l";
  className?: string;
}
