
export interface MenuElementProps {
  text?: string;
  typeElement: "btn"| "link" | "search" ;
  icon?: string;
  hideToMobile?: "true";
  to?: string | undefined;
  onClick?: ()=> void;
  active?: boolean;

}
