import { TMovie } from "../../api/Schema/MoviesSchem";

export interface ListCardProps {
  mode?: string;
  listCard?: TMovie[];
  onClose?: (id: string) => void;
  // adaptive: string;
}
