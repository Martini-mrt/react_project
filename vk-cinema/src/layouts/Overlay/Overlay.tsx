import React from 'react';
import './Overlay.scss';
import { OwerlayProps } from './Overlay.types';


// ! не нужен реализовал в Portale


const Owerlay: React.FC<OwerlayProps> = ({ children }) => {
  return <div className="overlay">{children}</div>;
};

export default Owerlay;
