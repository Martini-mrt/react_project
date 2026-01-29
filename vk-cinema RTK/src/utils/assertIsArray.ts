// функция проверки на массив
// !пока не нужен
export function assertIsArray<T>(value: unknown, errorMessage = "Ожидался массив"): T[] {
    console.log(value)
  if (!Array.isArray(value)) {
    throw new Error(errorMessage);
  }
  return value;
}