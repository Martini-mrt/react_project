import React from "react";
import "./FilmPage.scss";
import { FilmPageProps } from "./FilmPage.types";
import HeroFilm from "../../components/HeroFilm";
import AboutFilm from "../../components/AboutFilm";
import Section from "../../layouts/Section";
import Btn from "../../components/Btn";
import BtnBox from "../../components/BtnBox";

const FilmPage: React.FC<FilmPageProps> = () => {
  return (
    <>
      <HeroFilm name="ddd">
        
    
            <BtnBox AllBtnShow={false} />

      </HeroFilm>

      <Section heading="О фильме">
        <div className="container">
          <AboutFilm />
        </div>
      </Section>
    </>
  );
};

export default FilmPage;

//  <div className="herofilm__btn-box">
//             <Btn
//               className="herofilm__btn-primary"
//               text="Трейлер"
//               type="primary"
//             />
//             <Btn
//               className="herofilm__btn-default"
//               text="О фильме"
//               type="default"
//             />

//             <div className="herofilm__btn-boxWrap">
//               <Btn type="like" like={true} />
//               <Btn type="refresh" />
//             </div>
