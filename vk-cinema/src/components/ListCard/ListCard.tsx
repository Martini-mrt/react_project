import React from "react";

import { ListCardProps } from "./ListCard.types";
import CardFilm from "../CardFilm";

// import { useWindowWidth } from "../../hooks/useWindowWidth";

// import Swiper from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { useTopTenMovies } from "../../hooks/Movie/useMovie";

import "./ListCard.scss";
import { useBreakpointsMap } from "../../hooks/useBreakpointValue";

// import '../../../node_modules/swiper/swiper.css';

// !Лучше использовать isTop и isClosable вместо mode === 'top' / 'btnClose'.

// ! доделать компонент

// TODO {lg ? <GridList cards={cardList} mode={mode} /> : <SwiperList cards={cardList} mode={mode} />}

// TODO сделай memo низацию

const ListCard: React.FC<ListCardProps> = ({ mode, listCard, onClose }) => {
  // сделать оптимизацию чтоб не рендерилась при изменении экрана
  //  const breackpointAddaptive = 1000;å
  //   const width = useWindowWidth();
  // console.log(width);

  // const cardList = Array.isArray(data) ? data.slice(0, 10) : false;

  // const arrCard = assertIsArray(data);

  // console.log('ListCard => ', isPending, error)

  const { lg } = useBreakpointsMap();

  //  console.log(data)
  // console.log(error);

  // const onClickCard = (event: MouseEvent): void => {

  //   event.preventDefault();
  //  const target = event.target as HTMLElement;

  //   const cardElement = target.closest<HTMLElement>("[data-id]");
  //   console.log(cardElement);
  // };

  // useEffect(() => {
  //   window.addEventListener("click", onClickCard);

  //   return () => {
  //     window.removeEventListener("click", onClickCard);
  //   };
  // }, []);

  // сделать один обработчик на соьытие

  // !проверка чтоб было только 10 карточек
  return (
    <div className="listcard">
      {lg ? (
        <ul className="container listcard__grid">
          {listCard &&
            listCard.map((card, id) => (
              <li className="listcard__item" key={card.id}>
                <CardFilm
                  onClose={onClose}
                  data={card}
                  topPosition={mode === "top" ? id + 1 : false}
                  btnClose={mode === "btnClose"}
                />
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
          {listCard &&
            listCard.map((card, id) => (
              <SwiperSlide tag="li" className="listcard__item" key={card.id}>
                <CardFilm
                onClose={onClose}
                  data={card}
                  topPosition={mode === "top" ? id + 1 : false}
                  btnClose={mode === "btnClose"}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default ListCard;
