import React from 'react';
import './BtnRound.scss';
import { BtnRoundProps } from './BtnRound.types';
import IconSVG from '../IconSVG';



const BtnRound: React.FC<BtnRoundProps> = ({icon, size = "m", className, ...props}) => {




  return (
  <button className={`btnround btnround--${size} ${className}`} {...props}>
 <IconSVG className="btnround__svg" icon={icon}/>
</button>);
};

export default BtnRound;



