import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface InputFormProps extends InputHTMLAttributes<HTMLInputElement>{
  icon?: string;
  isError?: FieldError;
}
