import React from "react";
import "./GenrePage.scss";
import { GenrePageProps } from "./GenrePage.types";
// import ListCard from '../../components/ListCard';
import Section from "../../layouts/Section";
import ListCardGenre from "../../components/ListCardGenre";
import Footer from "../../components/Footer";

const GenrePage: React.FC<GenrePageProps> = () => {
  return (
    <>
      <Section heading="Жанры фильмов" >
       <ListCardGenre  />
      </Section>
      
    </>
  );
};

export default GenrePage;
