import React from 'react';
import './SocialList.scss';
import { SocialListProps } from './SocialList.types';
import SocialLink from '../../components/SocialLink';

const SocialList: React.FC<SocialListProps> = () => {
  return <ul className="sociallist">
    <li>
      <SocialLink href={'https://vk.com/martinidance'} icon={"vk"}  />
    </li>
    <li>
      <SocialLink href={'https://www.youtube.com/?app=desktop&hl=ru'} icon={"youtube"} />
    </li>
    <li>
      <SocialLink href={'https://ok.ru'} icon={"ok"} />
    </li>
    <li>
      <SocialLink href={'https://t.me/martini_mrt'} icon={"telegram"} />
    </li>
    </ul>;
};

export default SocialList;
