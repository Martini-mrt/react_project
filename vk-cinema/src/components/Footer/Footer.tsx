import React from 'react';
import './Footer.scss';
import { FooterProps } from './Footer.types';

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <div className="footer">{children}</div>;
};

export default Footer;
