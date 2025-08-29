import { TMovie } from "../../api/Schema/MoviesSchem";

export interface HeroFilmProps {
  movieData: TMovie | undefined;
  isSinglePage?: boolean;
  handleRefetch?: () => void;
  handleAboutFilm?: () => void;
  // handleLike?: (id: string) => void;
    handleLike?: () => void;
  handleTriller?: () => void;
}
