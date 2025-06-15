import React from 'react';
import './Owerlay.scss';
import { OwerlayProps } from './Owerlay.types';

const Owerlay: React.FC<OwerlayProps> = ({ children }) => {
  return <div className="owerlay">{children}</div>;
};

export default Owerlay;
