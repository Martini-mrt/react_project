import React from "react";
import "./HeroFilm.scss";
import { HeroFilmProps } from "./HeroFilm.types";

import img from "../../assets/img/hero.jpg";
import InfoFilm from "../InfoFilm";
import Btn from "../Btn";
import BtnIcon from "../BtnIcon";
import BtnLike from "../BtnLike -del";

// ! меню хедера не соответвует макету


const HeroFilm: React.FC<HeroFilmProps> = ({ name }) => {
  return (
    <section className="herofilm">
      <div className="container herofilm__container">
        {/*  */}

        <div className="herofilm__content">
          <InfoFilm
            rating={7.5}
            year="1979"
            genre="детектив"
            time="1 ч 7 мин"
          />

          <h1 className="herofilm__heading">
            Шерлок Холмс и доктор Ватсон: Знакомство
          </h1>
          <p className="herofilm__description">
            Увлекательные приключения самого известного сыщика всех времен
          </p>
          <div className="herofilm__btn-box">
            <Btn text="Трейлер" type="primary" />
            <Btn text="О фильме" type="default" />

           <div className="herofilm__btn-boxWrap">
           <Btn type="like" like={true} />
           <Btn type="refresh" />
           </div>
           

            {/* !сделать много функц комп */}
            {/* <BtnLike like={true} /> */}

          </div>
        </div>

        <div className="herofilm__wrap-img">
          <img className="herofilm__img" src={img} alt={name} />
        </div>

        {/*  */}
      </div>
    </section>
  );
};

export default HeroFilm;
