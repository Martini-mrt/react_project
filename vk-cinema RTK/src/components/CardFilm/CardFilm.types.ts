// import { ReactNode } from 'react';

import { TMovie } from "../../features/movie/schema/MoviesSchem";

export interface CardFilmProps {
  // children?: ReactNode;
  topPosition?: number | boolean;
  btnClose?: boolean;
  onClose?: (id: string) => void;
  data: TMovie;
  // data: {
  //   id: number;
  //   title: string;
  //   posterUrl: string;
  // }
}


