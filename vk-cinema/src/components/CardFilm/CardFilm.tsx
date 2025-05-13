import React from 'react';
import './CardFilm.scss';
import { CardFilmProps } from './CardFilm.types';

const CardFilm: React.FC<CardFilmProps> = ({ position }) => {
  return <a className="cardfilm" data-label={position}>
      <img className='cardfilm__img' src="../../../src/assets/img/card2.jpg" alt="" />
    </a>;
};

export default CardFilm;
