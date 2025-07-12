import React from 'react';
import './ListCardGenre.scss';
import { ListCardGenreProps } from './ListCardGenre.types';
import CardGenre from '../CardGenre';
// import { useGenresMovie } from '../../hooks/Movie/useMovie';
import { translateGenres } from '../../utils/translateGenres';
import { useGenresMovie } from '../../hooks/Movie/useMovie';



const ListCardGenre: React.FC<ListCardGenreProps> = () => {


// todo вынести выше этот хук
const {data, error, isPending} = useGenresMovie()


// console.log(data, error, isPending)

// translateGenres(card)

  return ( <ul className="list-card-genre">

  {data && data.map((card, id) => (
    <li className="list-card-genre__item" key={id}>
      <CardGenre genre={card} />
    </li>
  ))}
  </ul>
  );

};

export default ListCardGenre;






