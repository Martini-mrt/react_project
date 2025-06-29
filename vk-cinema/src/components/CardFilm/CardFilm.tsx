import React from "react";
import "./CardFilm.scss";
import { CardFilmProps } from "./CardFilm.types";
import IconSVG from "../IconSVG";

import plugMovieImg from "../../assets/img/plug-Movie.jpg";

const CardFilm: React.FC<CardFilmProps> = ({ data, topPosition, btnClose }) => {
  return (
    <a
      href={`/data/${data.id}`}
      className={`cardfilm   ${topPosition ? "cardfilm--show-top" : ""} `}
      data-label={topPosition}
      tabIndex={0}
    >
      {btnClose && (
        <button className="cardfilm__btn-close">
          <IconSVG icon="close" />
        </button>
      )}

      <div className="cardfilm__inner">

        {!data.posterUrl && (
          <h2 className="cardfilm__slug-heading">{data.title}</h2>
        )}

        <img
          className="cardfilm__img"
          src={data.posterUrl || plugMovieImg}
          alt={data.title}
        />

      </div>
    </a>
  );
};

export default CardFilm;
