import React from "react";

import { ListCardProps } from "./ListCard.types";
import CardFilm from "../CardFilm";

import { useWindowWidth } from "../../hooks/useWindowWidth";

// import Swiper from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTopTenMovies } from "../../hooks/Movie/useMovie";

import "./ListCard.scss";
import { useBreakpointsMap } from "../../hooks/useBreakpointValue";
import { assertIsArray } from "../../utils/assertIsArray";

// import '../../../node_modules/swiper/swiper.css';



const ListCard: React.FC<ListCardProps> = ({ mode }) => {

// сделать оптимизацию чтоб не рендерилась при изменении экрана
//  const breackpointAddaptive = 1000;
//   const width = useWindowWidth();
  // console.log(width);

  const { data, error, isPending } = useTopTenMovies();
  
  const cardList  = Array.isArray(data) ? data.slice(0, 10) : false;

  // const arrCard = assertIsArray(data);
 
  // console.log('ListCard => ', isPending, error)

 const { lg } = useBreakpointsMap();
   
//  console.log(error)
  
 
 


// !проверка чтоб было только 10 карточек
  return (
    <div className="listcard">
      {lg? (
        <ul className="container listcard__grid">

          {cardList && cardList.map((card, id) => (
            <li className="listcard__item" key={card.id}>
              <CardFilm data={card} topPosition={ mode === "top" ? id + 1 : false} btnClose={mode === "btnClose"} />
            </li>
          ))}

        </ul>
      ) : (
     
        <Swiper
          spaceBetween={40}
          slidesPerView={"auto"}
          wrapperTag="ul"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          
          {cardList && cardList.map((card, id) => (
            <SwiperSlide tag="li" className="listcard__item" key={id}>
              <CardFilm data={card} topPosition={ mode === "top" ? id + 1 : false} btnClose={mode === "btnClose"} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ListCard;

