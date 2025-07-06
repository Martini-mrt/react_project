import { TMovie } from "../../schemas/MoviesSchem";


export interface ListCardMoviesByGenreProps {
  listCard?: TMovie[];
  onLoadMore: () => void;
  isLoading?: boolean;
}
