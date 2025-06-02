import React from 'react';
import './CardFilm.scss';
import { CardFilmProps } from './CardFilm.types';
import IconSVG from '../IconSVG';

const CardFilm: React.FC<CardFilmProps> = ({ topPosition, btnClose }) => {

  

  return <a className= {`cardfilm   ${topPosition ? "cardfilm--show-top" : ""} `} data-label={topPosition} tabIndex={0}>

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
