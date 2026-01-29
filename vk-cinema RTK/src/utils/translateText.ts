// !не рабочий вариант

export async function translateText(text: string): Promise<string> {
  const response = await fetch("/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q: text,
      source: "en",
      target: "ru",
      format: "text",
    }),
   credentials: 'include'
  });

  const result = await response.json();
  return result.translatedText;
}