import React from 'react';
import './AccountPage.scss';
import { AccountProps } from './AccountPage.types';
import Section from '../../layouts/Section';
import ListCard from '../../components/ListCard';
import Tabs, {Tab} from '../../components/Tabs';
import AccountContent from '../../components/AccountContent';
import AccountItem from '../../components/AccountItem';

const Account: React.FC<AccountProps> = () => {
  return (
  <Section heading="Мой аккаунт" childrenInContainer={false}>
   
   {/* табы */}
    

   <Tabs>
     <Tab btnBuild={{title: "Избранные фильмы", mobileTitle: "Избранное", icon: "like"}} >
      <ListCard mode="btnClose"/>
     </Tab>

      <Tab btnBuild={{title: "Настройка аккаунта", mobileTitle: "Настройки", icon: "login"}}>
        <AccountContent className='container'>
          <AccountItem iconText='KK' label='Имя Фамилия' value='Константин Константинопольский' />
          <AccountItem icon='mail' label='Электронная почта' value='example@domain.com' />
        </AccountContent>
     </Tab>

   </Tabs>

    {/* <ListCard mode="btnClose"  /> */}


    </Section>
    );
};

export default Account;


