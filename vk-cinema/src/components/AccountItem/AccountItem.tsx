import React from 'react';
import './AccountItem.scss';
import { AccountItemProps } from './AccountItem.types';
import IconSVG from '../IconSVG';

const AccountItem: React.FC<AccountItemProps> = ({ icon, iconText , label, value }) => {


  return <div className="accountitem">
      
      <div className='accountitem__ico'>
        {icon && <IconSVG className="accountitem__svg" icon={icon} />}  
         {iconText && iconText}
      </div>

      <div className='accountitem__content'>
        <div className='accountitem__label'>{label}</div>
        <div className='accountitem__value'>{value}</div>
      </div>

  </div>;
};

export default AccountItem;
