import React from "react";
import "./HeroFilm.scss";
import { HeroFilmProps } from "./HeroFilm.types";

import img from "../../assets/img/hero.jpg";
import InfoFilm from "../InfoFilm";
import Btn from "../Btn";
import BtnIcon from "../BtnIcon";
import BtnLike from "../BtnLike -del";
import { useRandomMovie } from "../../hooks/Movie/useMovie";
import { TMovie } from "../../schemas/MoviesSchem";
import { formatMinutesToHours } from "../../utils/formatMinutesToHours";

import plugMovieImg from "../../assets/img/plug-Movie.jpg";
import { truncateText } from "../../utils/truncateText";
import BtnBox from "../BtnBox";

// ! меню хедера не соответвует макету

const HeroFilm: React.FC<HeroFilmProps> = ({  }) => {

   const {data, error, isPending, refetch} = useRandomMovie();

  //  setTimeout(() => {
  //   refetch()
  //  }, 5000);

  //  const movie = data as TMovie | undefined;
  
//  console.log(translateText("hello")) 

  //  console.log('Hero => ', data)

  return (
    <section className="herofilm">
      <div className="container herofilm__container">
        
        <div className="herofilm__content">
          <InfoFilm
            rating={Number(data?.tmdbRating)}
            year={data?.releaseYear}
            genre={data?.genres}
            time={formatMinutesToHours(data?.runtime)}
          />

          <h1 className="herofilm__heading">{data?.title}</h1>
          {/* подумать над обрезкой текста при адаптиве */}
          <p className="herofilm__description">{truncateText(data?.plot, 200)}</p>

          <BtnBox AllBtnShow={false} handleRefetch={refetch} />
        </div>

        <div className="herofilm__wrap-img">
          {  <img className="herofilm__img" src={data?.backdropUrl || data?.posterUrl || plugMovieImg} alt={data?.title} /> }
          
          {/* <img className="herofilm__img" src={img} alt={data?.title} /> */}
        </div>

      </div>
    </section>
  );
};

export default HeroFilm;
