// обрезка по сиволам строку
export const truncateText = (
  text: string | undefined,
  maxLength: number
): string => {
  if (text) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  }
  return "";
};
