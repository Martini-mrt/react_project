import React from 'react';
import './SectionList.scss';
import { SectionListProps } from './SectionList.types';

const SectionList: React.FC<SectionListProps> = ({ children, heading }) => {
  return <section className="sectionlist">
    <div className='container'>
    <h2 className='sectionlist__heading'>{heading}</h2>
    </div>
    {children}
    </section>;
};

export default SectionList;
