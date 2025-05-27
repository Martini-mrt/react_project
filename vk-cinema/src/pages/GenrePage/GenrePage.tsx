import React from "react";
import "./GenrePage.scss";
import { GenrePageProps } from "./GenrePage.types";
// import ListCard from '../../components/ListCard';
import SectionList from "../../layouts/SectionList";
import ListCardGenre from "../../components/ListCardGenre";
import Footer from "../../components/Footer";

const GenrePage: React.FC<GenrePageProps> = () => {
  return (
    <>
      <SectionList heading="Жанры фильмов" >
       <ListCardGenre  />
      </SectionList>
      
    </>
  );
};

export default GenrePage;
