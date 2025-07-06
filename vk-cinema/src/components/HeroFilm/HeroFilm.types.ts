import { TMovie } from "../../schemas/MoviesSchem";

export interface HeroFilmProps {
  movieData: TMovie | undefined;
  isSinglePage?: boolean;
  handleRefetch?: () => void;
  handleAboutFilm?: () => void;
  handleLike?: () => void;
  handleTriller?: () => void;
}
