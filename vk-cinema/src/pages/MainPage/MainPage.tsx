import React from "react";
import "./MainPage.scss";
// import HeroLayout from "../../layouts/HeroLayout";
import HeroFilm from "../../components/HeroFilm";
import Section from "../../layouts/Section";
import ListCard from "../../components/ListCard";
// import Footer from "../../components/Footer";
// import SocialList from "../../layouts/SocialList";
import BtnBox from "../../components/BtnBox";

const MainPage: React.FC = () => {
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
