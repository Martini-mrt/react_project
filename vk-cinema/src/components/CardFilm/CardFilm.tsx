import React from 'react';
import './CardFilm.scss';
import { CardFilmProps } from './CardFilm.types';
import IconSVG from '../IconSVG';

const CardFilm: React.FC<CardFilmProps> = ({ position, btnClose }) => {

  

  return <a className= {`cardfilm   ${position ? "cardfilm--show-top" : ""} `} data-label={position} tabIndex={0}>

    { btnClose && 
    <button className='cardfilm__btn-close'>
      <IconSVG icon='close' />
    </button>
    }

    <div className='cardfilm__inner'>
      <img className='cardfilm__img' src="../../../src/assets/img/card2.jpg" alt="" />
      </div>
    </a>;
};

export default CardFilm;
