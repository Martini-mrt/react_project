import React from "react";
import "./InfoFilm.scss";
import { InfoFilmProps } from "./InfoFilm.types";
import Rating from "../Rating";

const InfoFilm: React.FC<InfoFilmProps> = ({ rating, year, genre, time }) => {
  return (
    <div className="infofilm">
      <Rating rating={rating} />
      <span>{year}</span>
      <span>{genre}</span>
      <span>{time}</span>
    </div>
  );
};

export default InfoFilm;
