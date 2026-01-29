import React, { MouseEvent } from "react";
import "./CardFilm.scss";
import { CardFilmProps } from "./CardFilm.types";
import IconSVG from "../IconSVG";

import plugMovieImg from "../../assets/img/plug-Movie.jpg";
import { NavLink } from "react-router";

const CardFilm: React.FC<CardFilmProps> = ({ data, topPosition, btnClose, onClose }) => {
  const onDeleteClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation(); 
    onClose?.(String(data.id));
    console.log("Удалить => ",data.id)
  }


  return (
    <NavLink
      // href={`/movie/${data.id}`}
      to={`/movie/${data.id}`}
      // data-id={data.id}
      className={`card-film ${topPosition ? "card-film--show-top" : ""} `}
      data-label={topPosition}
      tabIndex={0}
    >
      {btnClose && (
        <button className="card-film__btn-close" onClick={onDeleteClick}>
          <IconSVG icon="close" />
        </button>
      )}

      <div className="card-film__inner">

        {!data.posterUrl && (
          <h2 className="card-film__slug-heading">{data.title}</h2>
        )}

        <img
          className="card-film__img"
          src={data.posterUrl || plugMovieImg}
          alt={data.title}
        />

      </div>
    </NavLink>
  );
};

export default CardFilm;
