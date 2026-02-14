export interface BtnBoxProps {
  isSingleMoviePage?: boolean;
  handleTriller?: () => void;
  handleAboutFilm?: () => void;
  // handleLike?: () => void;
  favoriteId: number;
  handleRefetch?: () => void;
}
