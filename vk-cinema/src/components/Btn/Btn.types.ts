
export interface BtnProps {
  text?: string;
  like?: boolean;
  type: "primary" | "default" | "onlyText" | "refresh" | "like";
  className?: string;
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: () => void;
  isLoading?: boolean;
}
