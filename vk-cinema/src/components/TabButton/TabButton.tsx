import React from "react";
import "./TabButton.scss";
import { TabButtonProps } from "./TabButton.types";
import IconSVG from "../IconSVG";
import { useWindowWidth } from "../../hooks/useWindowWidth";


//! убрать ререндеры кнопок

const TabButton: React.FC<TabButtonProps> = ({ btnBuild, index, isActive,onClick }) => {
  const size = useWindowWidth();
  const breackpointAddaptive = 800;

  // let title:string | undefined ;
  console.log(size);

  const title =
    size <= breackpointAddaptive ? btnBuild.mobileTitle : btnBuild.title;

  return (
    <button className={`tabbutton ${isActive && "active"}`} onClick={() => onClick(index)}>
      {btnBuild.icon && (
        <IconSVG className="tabbutton__svg" icon={btnBuild.icon} />
      )}

      {title}
    </button>
  );
};




export default TabButton;
