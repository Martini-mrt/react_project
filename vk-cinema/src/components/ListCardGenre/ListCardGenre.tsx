import React from 'react';
import './ListCardGenre.scss';
import { ListCardGenreProps } from './ListCardGenre.types';
import CardGenre from '../CardGenre';


const arr = [
  {
    id: 1,
    genre: "Драма"
  },
  {
    id: 2,
    genre: "Комедия"
  },
  {
    id: 3,
    genre: "Детектив"
  },
  {
    id: 4,
    genre: "Семейное"
  },
  {
    id: 5,
    genre: "Историческое"
  },
  {
    id: 6,
    genre: "Триллер"
  },
  {
    id: 7,
    genre: "Фантастика"
  },
  {
    id: 8,
    genre: "Приключения"
  },

  

];

const ListCardGenre: React.FC<ListCardGenreProps> = () => {

  return  <ul className="container listcardgenre">

  {arr.map((card, id) => (
    <li className="listcardgenre__item" key={id}>
      <CardGenre heading={card.genre} />
    </li>
  ))}
  </ul>;
};

export default ListCardGenre;






