
export interface BtnProps {
  text?: string;
  like?: boolean;
  type: "primary" | "default" | "onlyText" | "refresh" | "like";
  className?: string;
  handleClick: () => void;
}
