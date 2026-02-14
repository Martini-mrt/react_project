import React from "react";
import "./Favorite.scss";
import { FavoriteProps } from "./Favorite.types";
import Btn from "../../../../components/Btn";
import { useAuthStatus } from "../../../user/hooks/useAuthStatus";
import { useToggleFavoriteMutation } from "../../api/favorites.api";
import { useLocation, useNavigate } from "react-router";


const Favorite: React.FC<FavoriteProps> = ({ favoriteId }) => {

  // ! вынести с элементов Login и Favorites
  const navigate = useNavigate();
  const location = useLocation();

  const { userData, isAuth } = useAuthStatus();
  const [toggle] = useToggleFavoriteMutation();

  
    const isLiked = userData?.favorites?.includes(String(favoriteId)) || false;
  
    // console.log(isLiked, userData?.favorites, favoriteId)

  const handleLike = async () => {
    if (!isAuth) {
      console.log("переход на login")
      // переход на Login
      navigate("/login", { state: { background: location } })
      
      return;
    }

    // переключаем избранное
    await toggle({ 
      id: String(favoriteId), 
      isAdded: isLiked // Передаем текущий статус
    });

  }
  


  return <Btn styleBtn="like" like={isLiked} onClick={handleLike} />;
};

export default Favorite;
