import React from 'react';
import './SocialList.scss';
import { SocialListProps } from './SocialList.types';
import SocialLink from '../../components/SocialLink';

const SocialList: React.FC<SocialListProps> = () => {
  return <ul className="sociallist">
    <li>
      <SocialLink href={'#'} icon={"vk"}  />
    </li>
    <li>
      <SocialLink href={'#'} icon={"youtube"} />
    </li>
    <li>
      <SocialLink href={'#'} icon={"ok"} />
    </li>
    <li>
      <SocialLink href={'#'} icon={"telegram"} />
    </li>
    </ul>;
};

export default SocialList;
