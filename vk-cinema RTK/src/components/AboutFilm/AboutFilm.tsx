import React from "react";
import "./AboutFilm.scss";
import { AboutFilmProps } from "./AboutFilm.types";
import { translateLanguageCode } from "../../utils/translateLanguage";

const renderItem = (label: string, value?: React.ReactNode) => {
  if (!value) return null;
  return (
    <li className="about-film__item">
      <span className="about-film__label">{label}</span>
      <span className="about-film__dashed"></span>
      <span className="about-film__value">{value}</span>
    </li>
  );
};

const AboutFilm: React.FC<AboutFilmProps> = ({ movieData }) => {

  if (!movieData) return null;

  const { language, budget, revenue, director, production, awardsSummary } =
    movieData || {};

    const lang = translateLanguageCode(language);
    const budgetRender  = budget? Number(budget)?.toLocaleString("ru-RU") + " руб." : null;
    const revenueRender = revenue? Number(revenue)?.toLocaleString("ru-RU") + " руб." : null;

  return (
    <ul className="about-film">
      {renderItem("Язык оригинала", lang)}
      {renderItem("Бюджет",  budgetRender)}
      {renderItem("Выручка", revenueRender)}
      {renderItem("Режиссёр", director)}
      {renderItem("Продакшен", production)}
      {renderItem("Награды", awardsSummary)}
    </ul>
  );
};

export default AboutFilm;
