import React from 'react';
import './Account.scss';
import { AccountProps } from './Account.types';
import Section from '../../layouts/Section';
import ListCard from '../../components/ListCard';
import Tabs, {Tab} from '../../components/Tabs';

const Account: React.FC<AccountProps> = () => {
  return (
  <Section heading="Мой аккаунт" childrenInContainer={false}>
   
   {/* табы */}
    


   <Tabs>
     <Tab btnBuild={{title: "Избранные фильмы", mobileTitle: "Избранное", icon: "like"}} >
      <ListCard />
     </Tab>

      <Tab btnBuild={{title: "Настройка аккаунта", mobileTitle: "Настройки", icon: "login"}}>
       <div>Таб 22222222</div>
     </Tab>

   </Tabs>

    {/* <ListCard mode="btnClose"  /> */}


    </Section>
    );
};

export default Account;


