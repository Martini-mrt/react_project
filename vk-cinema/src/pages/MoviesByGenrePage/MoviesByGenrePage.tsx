import React from 'react';
import './MoviesByGenrePage.scss';
import { MoviesByGenrePageProps } from './MoviesByGenrePage.types';
import SectionList from '../../layouts/Section';
import ListCardMoviesByGenre from '../../components/ListCardMoviesByGenre';

const MoviesByGenrePage: React.FC<MoviesByGenrePageProps> = () => {
  return (
    
    <SectionList heading='Фантастика'>
       <ListCardMoviesByGenre />
    </SectionList>
    
  );
};

export default MoviesByGenrePage;
