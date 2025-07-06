import React from "react";
import "./CardGenre.scss";
import { CardGenreProps } from "./CardGenre.types";
import { Link } from "react-router";
import { capitalize } from "../../utils/capitalize";
import { translateGenres } from "../../utils/translateGenres";

// !сделать заглушку img если не будет контента на список
const CardGenre: React.FC<CardGenreProps> = ({ genre }) => {

  const pathGenresImg = "../../../src/assets/img/genres";
  const imgPath = `${pathGenresImg}/${genre}.webp`;

  const genreToRus = capitalize(translateGenres(genre) as string);

  return (
    // доптсать линк
    <Link to={`/genre/${genre}`} className="card-genre">
      <img
        className="card-genre__img"
        src={imgPath}
        alt={`Изображение жанра ${genreToRus}`}
      />

      <div className="card-genre__content">{genreToRus}</div>
    </Link>
  );
};

export default CardGenre;
