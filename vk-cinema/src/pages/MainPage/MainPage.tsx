
import "./MainPage.scss";

import HeroFilm from "../../components/HeroFilm";
import Section from "../../layouts/Section";
import ListCard from "../../components/ListCard";

import { useRandomMovie, useTopTenMovies } from "../../hooks/Movie/useMovie";

import { useNavigate } from "react-router";
import { useAddToFavorites } from "../../hooks/favorites/useFavorites";
// import { addToFavorites } from "../../api/favorites/favorites";
import {  useUserLogin, useUserRegistrations } from "../../hooks/User/useUser";

// ! меню хедера не соответвует макету

const MainPage: React.FC = () => {
  // const { id } = useParams();
  const navigate = useNavigate();

  // console.log(navigate);

  const { data: movieRandom, refetch } = useRandomMovie();

   const { data: listCard } = useTopTenMovies();

   
// const { mutate: registr } = useUserRegistrations();
  //  console.log(error)

 const { mutate } = useUserLogin();

  return (
    <>
     
      <HeroFilm
        movieData={movieRandom}
        handleRefetch={refetch}
        // handleLike={}
        handleAboutFilm={() => navigate(`/movie/${movieRandom?.id}`)}
        // handleTriller={() => console.log("TRILLER")}
        handleTriller={() => mutate({ email: "mrt10", password: "1"})}
        // handleTriller={() => registr({ email: "mrt10", password: "1", name: "MRT", surname: "MORGUNOV"})}
      />

      <Section heading="Топ 10 фильмов" childrenInContainer={false}>
        <ListCard mode="top" listCard={listCard} />
      </Section>
    </>
  );
};

export default MainPage;
