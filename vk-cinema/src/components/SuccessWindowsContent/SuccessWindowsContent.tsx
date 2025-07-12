import React from 'react';
import './SuccessWindowsContent.scss';
import { SuccessWindowsContentProps } from './SuccessWindowsContent.types';
import Btn from '../Btn';

const SuccessWindowsContent: React.FC<SuccessWindowsContentProps> = ({ message , onActionsBtn }) => {
  return (
    <div className='success-windows-content'>
    {message && <p className='success-windows-content__description'>{message}</p> }
    <Btn styleBtn="primary" text="Войти" type='button' onClick={onActionsBtn} />
    </div>
  )
};

export default SuccessWindowsContent;





   