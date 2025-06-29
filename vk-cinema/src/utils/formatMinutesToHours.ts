export function formatMinutesToHours(minutes: number | undefined): string {
  if (minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    const hourPart = hours > 0 ? `${hours} ч` : "";
    const minutePart = mins > 0 ? `${mins} мин` : "";

    return [hourPart, minutePart].filter(Boolean).join(" ");
  }

  return "";
}
