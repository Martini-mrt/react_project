import React from "react";
import "./InfoFilm.scss";
import { InfoFilmProps } from "./InfoFilm.types";
import Rating from "../Rating";
import { translateGenres } from "../../utils/translateGenres";

const InfoFilm: React.FC<InfoFilmProps> = ({ rating, year, genre, time }) => {
  return (
    <div className="infofilm">
      <Rating rating={rating} />
      <span>{year}</span>

       {genre && translateGenres(genre).map((el, id) => (<span key={id}>{el}</span>))}
      
      <span>{time}</span>
    </div>
  );
};

export default InfoFilm;
