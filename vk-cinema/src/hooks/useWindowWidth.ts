import { useState, useEffect } from 'react';

// Hook watch windows size

export const useWindowWidth = (): number => {
    // инициализируем
    // устанавливаем размер окна
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // устанавливаем значение окна при изменении
    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };
    // подписаваемся на событие изменение размера окна
    window.addEventListener('resize', handleResize);

    return () => {
        // удаляем обработчик при размонтирование
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};