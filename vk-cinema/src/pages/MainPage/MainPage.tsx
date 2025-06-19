import React from "react";
import "./MainPage.scss";

import HeroFilm from "../../components/HeroFilm";
import Section from "../../layouts/Section";
import ListCard from "../../components/ListCard";

import BtnBox from "../../components/BtnBox";
import { useMovieById } from "../../hooks/useMovieById";
import { getMovie } from "../../api/movies";









const MainPage: React.FC = () => {

  // useMovieById('14');

  // console.log(getMovie('14'))

  const {data , isLoading, error} = useMovieById("");

console.log(data?.title , isLoading, error)



  return (
    <>
      {/* <HeroLayout /> */}

      {/*? hero возможно не layout! */}
       <HeroFilm name="ddd">
            <BtnBox AllBtnShow={true} />
      </HeroFilm>

      <Section heading="Топ 10 фильмов" childrenInContainer={false}>
        <ListCard mode="top" />
      </Section>

     
    </>
  );
};

export default MainPage;
