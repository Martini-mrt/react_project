import React from 'react';
import './ListCardMoviesByGenre.scss';
import { ListCardMoviesByGenreProps } from './ListCardMoviesByGenre.types';
import CardFilm from '../CardFilm';
import Btn from '../Btn';
// import { useMoviesByFilter } from '../../hooks/Movie/useMovie';



const ListCardMoviesByGenre: React.FC<ListCardMoviesByGenreProps> = ({listCard , onLoadMore, isLoading, isShowBtn}) => {
  return (
    <>
    <ul className="listCard-movies-genre">
  {listCard && listCard.map((card, id) => (
    
    <li className="listCard-movies-genre__item" key={id}>
      <CardFilm data={card} />
    </li>
  ))}
  </ul>

<div className='container listCard-movies-genre__wrap-btn'>
{ isShowBtn &&  <Btn text='Показать еще' type='primary' onClick={onLoadMore}  isLoading={isLoading}  /> }
</div>
   
   </>
  );
};

export default ListCardMoviesByGenre;



