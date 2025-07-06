// import { ReactNode } from 'react';

import { TMovie } from "../../schemas/MoviesSchem";

export interface CardFilmProps {
  // children?: ReactNode;
  topPosition?: number | boolean;
  btnClose?: boolean;
  onClose?: (id: string | number) => void;
  data: TMovie;
  // data: {
  //   id: number;
  //   title: string;
  //   posterUrl: string;
  // }
}


