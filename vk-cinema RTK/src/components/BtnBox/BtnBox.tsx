import React from "react";
import "./BtnBox.scss";
import { BtnBoxProps } from "./BtnBox.types";
import Btn from "../Btn/Btn";
import Favorite from "../../features/favorites/components/Favorite";

// TODO добавить состояние Like

const BtnBox: React.FC<BtnBoxProps> = ({
  isSingleMoviePage,
  handleTriller,
  handleAboutFilm,
  favoriteId,
  handleRefetch,
}) => {
  return (
    <div className={`btn-box ${isSingleMoviePage ? "btn-box--no-wrap " : ""}`}>
      <Btn
        className="btn-box__btn-primary"
        text="Трейлер"
        styleBtn="primary"
        onClick={handleTriller}
      />

      {!isSingleMoviePage && (
        <Btn
          className="btn-box__btn-default"
          text="О фильме"
          styleBtn="default"
          onClick={handleAboutFilm}
        />
      )}

      <div className="btn-box__wrap">
        {/* здесь состояни лайка */}

     {/* favoriteId */}

        <Favorite favoriteId={favoriteId} />

        {/* здесь компонент favites */}

        {/* <Btn styleBtn="like" like={false} onClick={handleLike} /> */}




        {!isSingleMoviePage && (
          <Btn styleBtn="refresh" onClick={handleRefetch} />
        )}
      </div>
    </div>
  );
};

export default BtnBox;
