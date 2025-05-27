import React from 'react';
import './CardGenre.scss';
import { CardGenreProps } from './CardGenre.types';

const CardGenre: React.FC<CardGenreProps> = ({ heading }) => {
  return <a className="cardgenre">
  <img className='cardgenre__img' src="../../../src/assets/img/dramma.jpg" alt="" />
  <div className='cardgenre__content'>{heading}</div>
</a>;
};

export default CardGenre;
