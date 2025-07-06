
import "./MainPage.scss";

import HeroFilm from "../../components/HeroFilm";
import Section from "../../layouts/Section";
import ListCard from "../../components/ListCard";

import { useRandomMovie } from "../../hooks/Movie/useMovie";

import { useNavigate } from "react-router";

// ! меню хедера не соответвует макету

const MainPage: React.FC = () => {
  // const { id } = useParams();
  const navigate = useNavigate();

  // console.log(navigate);

  const { data, error, isPending, refetch } = useRandomMovie();
  //  console.log(error)
  return (
    <>
      {/* <HeroLayout /> */}

      {/*? hero возможно не layout! */}
      <HeroFilm
        movieData={data}
        handleRefetch={refetch}
        handleLike={() => console.log("LIKE")}
        handleAboutFilm={() => navigate(`/movie/${data?.id}`)}
        handleTriller={() => console.log("TRILLER")}
      />

      <Section heading="Топ 10 фильмов" childrenInContainer={false}>
        <ListCard mode="top" />
      </Section>
    </>
  );
};

export default MainPage;
