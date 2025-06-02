import React from 'react';
import './Section.scss';
import { SectionProps } from './Section.types';

const Section: React.FC<SectionProps> = ({ children, heading, childrenInContainer= true }) => {
  return <section className="section">
    <div className='container'>
   { heading && <h2 className='section__heading'>{heading}</h2>}
   { childrenInContainer && children}
    </div>
    { !childrenInContainer && children }
    </section>;
};

export default Section;
