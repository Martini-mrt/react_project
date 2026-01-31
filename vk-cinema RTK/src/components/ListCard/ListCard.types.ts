import { TMovie } from "../../features/movie/schema/MoviesSchem";

export interface ListCardProps {
  mode?: string;
  listCard?: TMovie[];
  onClose?: (id: string) => void;
  // adaptive: string;
}
