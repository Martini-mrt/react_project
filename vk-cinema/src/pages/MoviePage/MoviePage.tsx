import React from "react";
import "./MoviePage.scss";
import { MoviePageProps } from "./MoviePage.types";
import HeroFilm from "../../components/HeroFilm";
import AboutFilm from "../../components/AboutFilm";
import Section from "../../layouts/Section";

import BtnBox from "../../components/BtnBox";
import { useGetMovieById } from "../../hooks/Movie/useMovie";
import { useParams } from "react-router";



const MoviePage: React.FC<MoviePageProps> = () => {
 
// нужно получить ID с хука
  const { id } = useParams();
  console.log(id)

 const {data, error} =  useGetMovieById(id? id : "")

 console.log(data, error)

  return (
    <>
      <HeroFilm name="ddd"/>
            

      <Section heading="О фильме">
        <div className="container">
          <AboutFilm />
        </div>
      </Section>
    </>
  );
};

export default MoviePage;

