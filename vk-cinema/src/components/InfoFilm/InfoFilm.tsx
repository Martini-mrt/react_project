import React from "react";
import "./InfoFilm.scss";
import { InfoFilmProps } from "./InfoFilm.types";
import Rating from "../Rating";
import { translateGenres } from "../../utils/translateGenres";

const InfoFilm: React.FC<InfoFilmProps> = ({ rating, year, genre, time }) => {
  const genres = Array.isArray(genre) ? translateGenres(genre) as string[] : [];
  return (
    <div className="info-film">

    {rating != null && <Rating rating={rating}/>}   

    {year && <span title="Год выхода">{year}</span>}

    {genres && genres.map((el, id) => (<span key={`${el}-${id}`}>{el}</span>))}
    
    {time && <span>{time}</span>}

    </div>
  );
};

export default InfoFilm;
