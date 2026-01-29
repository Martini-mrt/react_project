import React from 'react';
import './AccountItem.scss';
import { AccountItemProps } from './AccountItem.types';
import IconSVG from '../IconSVG';

const AccountItem: React.FC<AccountItemProps> = ({ icon, iconText , label, value }) => {


  return <div className="account-item">
      
      <div className='account-item__ico'>
        {icon && <IconSVG className="account-item__svg" icon={icon} />}  
         {iconText && iconText}
      </div>

      <div className='account-item__content'>
        <div className='account-item__label'>{label}</div>
        <div className='account-item__value'>{value}</div>
      </div>

  </div>;
};

export default AccountItem;
