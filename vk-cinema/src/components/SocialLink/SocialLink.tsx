import React from 'react';
import './SocialLink.scss';
import { SocialLinkProps } from './SocialLink.types';
import IconSVG from '../IconSVG';

const SocialLink: React.FC<SocialLinkProps> = ({icon, href}) => {
  return <a className="sociallink" href={href}>
    <IconSVG className='sociallink__svg' icon={icon}/>
  </a>;
};

export default SocialLink;
