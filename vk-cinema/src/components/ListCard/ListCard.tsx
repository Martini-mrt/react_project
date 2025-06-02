import React from "react";
import "./ListCard.scss";
import { ListCardProps } from "./ListCard.types";
import CardFilm from "../CardFilm";

import { useWindowWidth } from "../../hooks/useWindowWidth";

// import Swiper from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import '../../../node_modules/swiper/swiper.css';

const arr = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
];

const ListCard: React.FC<ListCardProps> = ({ mode }) => {


  const width = useWindowWidth();
  console.log(width);
  
  const breackpointAddaptive = 1000;


  return (
    <div className="listcard">
      {width > breackpointAddaptive ? (
        <ul className="container listcard__grid">
          {arr.map((card, id) => (
            <li className="listcard__item" key={id}>
              <CardFilm topPosition={ mode === "top" ? id + 1 : false} btnClose={mode === "btnClose"} />
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
          
          {arr.map((card, id) => (
            <SwiperSlide tag="li" className="listcard__item" key={id}>
              <CardFilm topPosition={ mode === "top" ? id + 1 : false} btnClose={mode === "btnClose"} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ListCard;

