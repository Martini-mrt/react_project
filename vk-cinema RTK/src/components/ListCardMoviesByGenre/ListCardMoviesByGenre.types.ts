import { TMovie } from "../../features/movie/schema/MoviesSchem";


export interface ListCardMoviesByGenreProps {
  listCard?: TMovie[];
  onLoadMore: () => void;
  isLoading?: boolean;
  isShowBtn?: boolean;
}
