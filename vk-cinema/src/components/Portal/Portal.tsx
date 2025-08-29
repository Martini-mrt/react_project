import React, { useEffect, useRef } from "react";
import "./Portal.scss";
import { PortalProps } from "./Portal.types";
import { createPortal } from "react-dom";

const Portal: React.FC<PortalProps> = ({
  children,
  container = document.body,
  className,
  id,
}) => {
  const elRef = useRef<HTMLDivElement | null>(null);

  // Создаем div при первом рендере
  if (!elRef.current) {
    elRef.current = document.createElement("div");
    if (className) elRef.current.className = className;
  if (id) elRef.current.id = id;
  }

  useEffect(() => {
    const el = elRef.current!;
    // добавляем в контейнер
    container.appendChild(el);

    return () => {
      // удаляем при размонтировании
      container.removeChild(el);
    };
  }, [container]);

  return elRef.current ? createPortal(children, elRef.current) : null;
};

export default Portal;
