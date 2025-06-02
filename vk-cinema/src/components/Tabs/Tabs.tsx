import React , {useState , Children} from 'react';
import './Tabs.scss';
import { TabsProps } from './Tabs.types';

const Tabs: React.FC<TabsProps> = ({ children }) => {

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const tabTitles = Children.map(children, (child) => child.props.label);

  return (
<div className="tabs">{children}</div>



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