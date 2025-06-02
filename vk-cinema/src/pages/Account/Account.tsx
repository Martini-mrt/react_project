import React from 'react';
import './Account.scss';
import { AccountProps } from './Account.types';
import Section from '../../layouts/Section';
import ListCard from '../../components/ListCard';
import Tabs from '../../components/Tabs';

const Account: React.FC<AccountProps> = () => {
  return (
  <Section heading="Мой аккаунт" childrenInContainer={false}>
   
   {/* табы */}
    
   <Tabs>
    
   </Tabs>

    {/* <ListCard mode="btnClose"  /> */}


    </Section>
    );
};

export default Account;


