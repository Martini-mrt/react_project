const genreTranslations: Record<string, string> = {
  history: "история",
  horror: "ужасы",
  scifi: "фантастика",
  "stand-up": "стендап",
  fantasy: "фэнтези",
  drama: "драма",
  mystery: "детектив",
  family: "семейный",
  comedy: "комедия",
  romance: "романтика",
  music: "музыка",
  crime: "криминал",
  "tv-movie": "ТВ-фильм",
  documentary: "документальный",
  action: "боевик",
  thriller: "триллер",
  western: "вестерн",
  animation: "анимация",
  war: "военный",
  adventure: "приключения",
};

export const translateGenres = (
  genres: string[] | string
): string[] | string => {

  // переводим в все сиволы в нижний регистр
  const translate = (genre: string) =>
    genreTranslations[genre.toLowerCase()] || genre;

  // return  Array.isArray(genres) ? genres.map((genre) => genreTranslations[genre] || genre) : genreTranslations[genres] || genres;
  // возврашаем или массив жанров или строку с жанром 
  return Array.isArray(genres) ? genres.map(translate) : translate(genres);
};
