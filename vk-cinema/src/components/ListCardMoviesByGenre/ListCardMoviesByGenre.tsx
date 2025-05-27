import React from 'react';
import './ListCardMoviesByGenre.scss';
import { ListCardMoviesByGenreProps } from './ListCardMoviesByGenre.types';
import CardFilm from '../CardFilm';
import Btn from '../Btn';

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

  {
    id: 9,
    genre: "Триллер"
  },
  {
    id: 10,
    genre: "Фантастика"
  },
  {
    id: 11,
    genre: "Приключения"
  },
  {
    id: 12,
    genre: "Триллер"
  },
  {
    id: 13,
    genre: "Фантастика"
  },
  {
    id: 14,
    genre: "Приключения"
  },
  {
    id: 15,
    genre: "Триллер"
  },
  
];


const ListCardMoviesByGenre: React.FC<ListCardMoviesByGenreProps> = () => {
  return (
    <>
    <ul className="container listcardmoviesbygenre">
  {arr.map((card, id) => (
    <li className="listcardmoviesbygenre__item" key={id}>
      <CardFilm position={id + 1} />
    </li>
  ))}
  </ul>

<div className='container listcardmoviesbygenre__wrap-btn'>
<Btn text='Показать еще' type='primary' />
</div>
   
   </>
  );
};

export default ListCardMoviesByGenre;



