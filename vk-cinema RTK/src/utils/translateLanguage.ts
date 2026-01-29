// const languageMap: Record<string, string> = {
//   en: "английский",
//   ru: "русский",
//   fr: "французский",
//   de: "немецкий",
//   es: "испанский",
//   it: "итальянский",
//   zh: "китайский",
//   ja: "японский",
//   ko: "корейский",
//   pt: "португальский",
//   tl: "Восточный тимор"
//   // добавь другие по необходимости
// };

import { capitalize } from "./capitalize";

// export const capitalize = (str: string): string =>
//   str.charAt(0).toUpperCase() + str.slice(1);

// export const translateLanguage = (code: string): string => {
//   const lang = languageMap[code.toLowerCase()] || code;
//   return capitalize(lang);
// };

export const translateLanguageCode = (code: string, locale = "ru") => {
  try {
    const displayNames = new Intl.DisplayNames([locale], { type: "language" });
    return capitalize(displayNames.of(code) ?? code);
  } catch {
    return code;
  }
};