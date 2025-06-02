import React from "react";
import "./AboutFilm.scss";
import { AboutFilmProps } from "./AboutFilm.types";

const AboutFilm: React.FC<AboutFilmProps> = ({ children }) => {
  return (
    <ul className="aboutfilm">
      <li className="aboutfilm__item">
        <span className="aboutfilm__label">Язык оригинала</span>
        <span className="aboutfilm__dashed"></span>
        <span className="aboutfilm__value">Русский</span>
      </li>

      <li className="aboutfilm__item">
        <span className="aboutfilm__label">Бюджет</span>
        <span className="aboutfilm__dashed"></span>
        <span className="aboutfilm__value">250 000 руб.</span>
      </li>

      <li className="aboutfilm__item">
        <span className="aboutfilm__label">Выручка</span>
        <span className="aboutfilm__dashed"></span>
        <span className="aboutfilm__value">2 835 000 руб.</span>
      </li>

      <li className="aboutfilm__item">
        <span className="aboutfilm__label">Режиссёр</span>
        <span className="aboutfilm__dashed"></span>
        <span className="aboutfilm__value">Игорь Масленников</span>
      </li>

      <li className="aboutfilm__item">
        <span className="aboutfilm__label">Продакшен</span>
        <span className="aboutfilm__dashed"></span>
        <span className="aboutfilm__value">Ленфильм</span>
      </li>

      <li className="aboutfilm__item">
        <span className="aboutfilm__label">Награды</span>
        <span className="aboutfilm__dashed"></span>
        <span className="aboutfilm__value">Топ-250, 33 место</span>
      </li>
    </ul>
  );
};

export default AboutFilm;
