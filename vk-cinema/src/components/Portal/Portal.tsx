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
    //  подписываемся на клик по overlay
    if (onClickOverlay) el.addEventListener("click", onClickOverlay);

    // добавляем в контейнер
    container.appendChild(el);

    return () => {
      if (onClickOverlay) el.removeEventListener("click", onClickOverlay);
      // удаляем при размонтировании
      container.removeChild(el);
    };
  }, [container]);

  return elRef.current ? createPortal(children, elRef.current) : null;
};

export default Portal;
