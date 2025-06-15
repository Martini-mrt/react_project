import React from "react";
import "./FilmPage.scss";
import { FilmPageProps } from "./FilmPage.types";
import HeroFilm from "../../components/HeroFilm";
import AboutFilm from "../../components/AboutFilm";
import Section from "../../layouts/Section";

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

