import React from 'react';
import './Footer.scss';
import { FooterProps } from './Footer.types';

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <footer className="footer">
    <div className='container'>
    {children}
    </div>
    
    </footer>;
};

export default Footer;
