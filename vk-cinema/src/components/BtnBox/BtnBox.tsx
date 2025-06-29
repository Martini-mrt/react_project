import React from "react";
import "./BtnBox.scss";
import { BtnBoxProps } from "./BtnBox.types";
import Btn from "../Btn/Btn";

const BtnBox: React.FC<BtnBoxProps> = ({ AllBtnShow, handleRefetch }) => {
  return (
    <div className={`btnbox ${!AllBtnShow ? "btnbox--no-wrap " : ""}`}>
      <Btn className="btnbox__btn-primary" text="Трейлер" type="primary" handleClick={() => console.log("Треллер")} />
      {AllBtnShow && (
        <Btn className="btnbox__btn-default" text="О фильме" type="default" handleClick={() => console.log("О фильме")}/>
      )}

      <div className="btnbox__btn-boxWrap">
        <Btn type="like" like={true} handleClick={() => console.log("like")} />
        {AllBtnShow && <Btn type="refresh" handleClick={handleRefetch}  />}
      </div>
    </div>
  );
};

export default BtnBox;
