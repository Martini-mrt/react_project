import React, { useState, Children, ReactElement } from "react";
import "./Tabs.scss";
import { TabsProps, TabProps } from "./Tabs.types";
import TabButton from "../TabButton";

// TAB - контейнер для контента
export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // создаем массив заголовков из label вложенных tab
  const tabTitles = children.map((child) => child.props.btnBuild);

  console.log(tabTitles);

  return (
    <>
      <div className="container tabs-list">
        {tabTitles.map((btnBuild, index) => (
          <TabButton
            isActive={index === activeIndex}
            btnBuild={btnBuild}
            index={index}
            key={btnBuild.title}
            onClick={setActiveIndex}
          />
        ))}
      </div>

      <div className="">{children[activeIndex]}</div>
    </>
  );
};

export default Tabs;

// interface TabProps {
//   label: string;
//   children?: ReactNode;
// }

// const tabTitles = Children.map(children, (child) => {
//   const element = child as ReactElement<TabProps>;
//   return element.props.label;
// });
