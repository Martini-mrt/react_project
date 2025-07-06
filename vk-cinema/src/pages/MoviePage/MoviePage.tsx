import React from "react";
import "./MoviePage.scss";
import { MoviePageProps } from "./MoviePage.types";
import HeroFilm from "../../components/HeroFilm";
import AboutFilm from "../../components/AboutFilm";
import Section from "../../layouts/Section";


import { useGetMovieById } from "../../hooks/Movie/useMovie";
import { useParams } from "react-router";



const MoviePage: React.FC<MoviePageProps> = () => {
 

  const { id } = useParams();


 const {data, error} =  useGetMovieById(id? id : "")

//  console.log(data, error)

  return (
    <>
      <HeroFilm
        movieData={data}
        isSinglePage={true}
        handleLike={() => console.log("LIKE")}
        handleTriller={() => console.log("TRILLER")}
      />
            

      <Section heading="О фильме">
        
          <AboutFilm movieData={data} />
        
      </Section>
    </>
  );
};

export default MoviePage;

