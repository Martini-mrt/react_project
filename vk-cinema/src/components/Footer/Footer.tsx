import React from 'react';
import './Footer.scss';
import { FooterProps } from './Footer.types';

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <div className="footer">
    <div className='container'>
    {children}
    </div>
    
    </div>;
};

export default Footer;
