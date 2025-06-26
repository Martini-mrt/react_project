import React, { useEffect, useState } from "react";
import "./MainPage.scss";

import HeroFilm from "../../components/HeroFilm";
import Section from "../../layouts/Section";
import ListCard from "../../components/ListCard";

import BtnBox from "../../components/BtnBox";
import { useGetMovieById } from "../../hooks/Movie/useGetMovieById";
import { getMovie } from "../../api/movies";
import { createUser, getUserProfile, login, logout } from "../../api/User/User";
import { loginFetch } from "../../api/axios";









const MainPage: React.FC = () => {

  // useMovieById('14');

  // console.log(getMovie('14'))

  // const {data , isLoading, error} = useGetMovieById("");
   
  //  console.log(createUser("mrt3@mrt.ru", "1234")); 

   
  // console.log(loginFetch("xxx@xxx.ru", "1234"))


useEffect(() => {
console.log(login("xxx@xxx.ru", "1234")) 
// console.log(createUser("xxx@xxx.ru", "1234")); 


});


// console.log(data?.title , isLoading, error)

 const [ test , setTest  ]  = useState("huy");

getUserProfile().then(res => setTest(res.data.name))

setTimeout(() => {
   

  // console.log(getUserProfile()) 
}, 2000);
 
  return (
    <>
      {/* <HeroLayout /> */}

      {/*? hero возможно не layout! */}
       <HeroFilm name="ddd">
        {test}
            <BtnBox AllBtnShow={true} />
      </HeroFilm>

      <Section heading="Топ 10 фильмов" childrenInContainer={false}>
        <ListCard mode="top" />
      </Section>

     
    </>
  );
};

export default MainPage;
