import React from 'react';
import './ListCardGenre.scss';
import { ListCardGenreProps } from './ListCardGenre.types';
import CardGenre from '../CardGenre';
// import { useGenresMovie } from '../../hooks/Movie/useMovie';
import { translateGenres } from '../../utils/translateGenres';



const ListCardGenre: React.FC<ListCardGenreProps> = () => {


const {data, error, isPending} = useGenresMovie()


// console.log(data, error, isPending)

// translateGenres(card)

  return ( <ul className="listcardgenre">

  {data && data.map((card, id) => (
    <li className="listcardgenre__item" key={id}>
      <CardGenre genre={card} />
    </li>
  ))}
  </ul>
  );

};

export default ListCardGenre;






