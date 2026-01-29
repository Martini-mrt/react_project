import { ReactElement } from 'react';


export interface LoginChildProps {
  text?: string;
  typeElement?: string;
  to?: string;
  className?: string;
  // onClick?: (e: React.MouseEvent) => void;
}

export interface LoginProps {
  children: ReactElement<LoginChildProps>;
  
}
