import React, { useEffect, useState } from "react";
import "./MainPage.scss";

import HeroFilm from "../../components/HeroFilm";
import Section from "../../layouts/Section";
import ListCard from "../../components/ListCard";

import BtnBox from "../../components/BtnBox";
import { useGenresMovie, useGetMovieById, useMoviesByFilter } from "../../hooks/Movie/useMovie";
import { getMovie, getMoviesByFilter } from "../../api/movies";
import { createUser, getUserProfile, login, logout } from "../../api/User/User";
import { loginFetch } from "../../api/axios";









const MainPage: React.FC = () => {

  // useMovieById('14');

  // console.log(getMovie('14'))

  // const {data , isLoading, error} = useGetMovieById("");
   
  //  console.log(createUser("mrt3@mrt.ru", "1234")); 

   
  // console.log(loginFetch("xxx@xxx.ru", "1234"))


  //  console.log(logout())

  // const {data , error, isPending} = useGetMovieById("13");

  // const {data , error} = useGenresMovie();

  // console.log(data, error)

useEffect(() => {
// console.log(createUser("xxx2@xxx.ru", "1234", "Artem", "Артемович")); 

// console.log(login("xxx2@xxx.ru", "1234")) 

// console.log(getUserProfile())




});


// console.log(getMovie('45174'))





// setTimeout(() => {
   

//   // console.log(getUserProfile()) 
// }, 2000);
 
  return (
    <>
      {/* <HeroLayout /> */}

      {/*? hero возможно не layout! */}
       <HeroFilm name="ddd">
    
            
      </HeroFilm>

      <Section heading="Топ 10 фильмов" childrenInContainer={false}>
        <ListCard mode="top" />
      </Section>

     
    </>
  );
};

export default MainPage;
