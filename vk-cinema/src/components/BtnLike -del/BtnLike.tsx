import React from "react";
import "./BtnLike.scss";
import { BtnLikeProps } from "./BtnLike.types";
import IconSVG from "../IconSVG";

const BtnLike: React.FC<BtnLikeProps> = ({ like }) => {
  return (
    <button className="btnlike" type="button">
      {like ? (
        <IconSVG icon="likeFill" className="btnlike__svg" />
      ) : (
        <IconSVG icon="like" className="btnlike__svg" />
      )}
    </button>
  );
};

export default BtnLike;
