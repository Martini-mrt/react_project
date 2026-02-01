import React, { useEffect, useRef } from "react";
import "./Portal.scss";
import { PortalProps } from "./Portal.types";
import { createPortal } from "react-dom";

const Portal: React.FC<PortalProps> = ({
  children,
  container = document.body,
  className,
  id,
  onClickOverlay,
}) => {
  const elRef = useRef<HTMLDivElement | null>(null);

  // Создаем div при первом рендере
  if (!elRef.current) {
    elRef.current = document.createElement("div");
    // elRef.current.setAttribute("data-close","");
    if (className) elRef.current.className = className;
    if (id) elRef.current.id = id;
  }

  useEffect(() => {
    const el = elRef.current!;
    if (!el) return;

    // Обработчик клика по фону
    const handleTargetClick = (e: MouseEvent) => {
      // Проверка: клик был именно по оверлею (el), а не по его детям (форме)
      if (e.target === el && onClickOverlay) {
        onClickOverlay();
      }
    };

    // Обработчик клавиши Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClickOverlay) {
        onClickOverlay();
      }
    };

    //  подписываемся на клик по overlay
    if (onClickOverlay) {
      el.addEventListener("click", handleTargetClick);
      // Слушаем на уровне окна
      window.addEventListener("keydown", handleKeyDown); 
    }

    // добавляем в контейнер
    container.appendChild(el);

    return () => {
      if (onClickOverlay){
        el.removeEventListener("click", handleTargetClick);
        window.removeEventListener("keydown", handleKeyDown);
      } 
      // удаляем при размонтировании
      if (container.contains(el)) {
        container.removeChild(el);
      }
      
      // container.removeChild(el);
    };
  }, [container, onClickOverlay]);

  return elRef.current ? createPortal(children, elRef.current) : null;
};

export default Portal;
