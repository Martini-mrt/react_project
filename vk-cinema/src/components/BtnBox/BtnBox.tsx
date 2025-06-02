import React from "react";
import "./BtnBox.scss";
import { BtnBoxProps } from "./BtnBox.types";
import Btn from "../Btn/Btn";

const BtnBox: React.FC<BtnBoxProps> = ({ AllBtnShow }) => {
  return (
    <div className={`btnbox ${!AllBtnShow ? "btnbox--no-wrap " : ""}`}>
      <Btn className="btnbox__btn-primary" text="Трейлер" type="primary" />
      {AllBtnShow && (
        <Btn className="btnbox__btn-default" text="О фильме" type="default" />
      )}

      <div className="btnbox__btn-boxWrap">
        <Btn type="like" like={true} />
        {AllBtnShow && <Btn type="refresh" />}
      </div>
    </div>
  );
};

export default BtnBox;
