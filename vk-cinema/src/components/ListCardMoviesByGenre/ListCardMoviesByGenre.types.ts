import { TMovie } from "../../api/Schema/MoviesSchem";


export interface ListCardMoviesByGenreProps {
  listCard?: TMovie[];
  onLoadMore: () => void;
  isLoading?: boolean;
  isShowBtn?: boolean;
}
