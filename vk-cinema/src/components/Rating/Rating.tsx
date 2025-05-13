import React from "react";
import "./Rating.scss";
import { RatingProps } from "./Rating.types";
import IconSVG from "../IconSVG";

const Rating: React.FC<RatingProps> = ({ rating }) => {
// Определяем цвет по рейтингу
  let colorRating = '';

  if (rating <= 4.2) {
    colorRating = "red";
  } else if (rating >= 4.2 && rating <= 6.3) {
    colorRating = "grey";
  } else if (rating >= 7.5 && rating <= 8.6) {
    colorRating = "green";
  } else if (rating >= 8.6) {
    colorRating = "gold";
  }
  
  {/* перобразуем число в строку с одной цифрой послу точки
      подменяем точку на запятую */}
  const formattedRating = rating == 10
  ? rating.toString()
  : rating.toFixed(1).replace(".", ",");

  return (
    <div className={`rating ${colorRating}`}>
      <IconSVG icon="star" className="rating__svg" />
      <span className="rating__value">
        {formattedRating}
        </span>
    </div>
  );
};

export default Rating;
