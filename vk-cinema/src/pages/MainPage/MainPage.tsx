import React from "react";
import "./MainPage.scss";
// import HeroLayout from "../../layouts/HeroLayout";
import HeroFilm from "../../components/HeroFilm";
import SectionList from "../../layouts/SectionList";
import ListCard from "../../components/ListCard";
import Footer from "../../components/Footer";


const MainPage: React.FC = () => {
  return (
    <>
      {/* <HeroLayout /> */}

      {/*? hero возможно не layout! */}
      <HeroFilm name="ddd" />

      <SectionList heading="Топ 10 фильмов">
       <ListCard mode="top" adaptive="slider" />
      </SectionList>
      <Footer />
    </>
  );
};

export default MainPage;
