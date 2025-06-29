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

export const translateGenres = (genres: string[]): string[] => {
  return genres.map((genre) => genreTranslations[genre] || genre);
}