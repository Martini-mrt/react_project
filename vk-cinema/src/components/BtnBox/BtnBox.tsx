import React from "react";
import "./BtnBox.scss";
import { BtnBoxProps } from "./BtnBox.types";
import Btn from "../Btn/Btn";

// TODO добавить состояние Like

const BtnBox: React.FC<BtnBoxProps> = ({
  isSingleMoviePage,
  handleTriller,
  handleAboutFilm,
  handleLike,
  handleRefetch,
}) => {
  return (
    <div className={`btn-box ${isSingleMoviePage ? "btn-box--no-wrap " : ""}`}>
      <Btn
        className="btn-box__btn-primary"
        text="Трейлер"
        typeBtn="primary"
        onClick={handleTriller}
      />

      {!isSingleMoviePage && (
        <Btn
          className="btn-box__btn-default"
          text="О фильме"
          typeBtn="default"
          onClick={handleAboutFilm}
        />
      )}

      <div className="btn-box__wrap">
        {/* здесь состояни лайка */}
        <Btn typeBtn="like" like={false} onClick={handleLike} />

        {!isSingleMoviePage && (
          <Btn typeBtn="refresh" onClick={handleRefetch} />
        )}
      </div>
    </div>
  );
};

export default BtnBox;
