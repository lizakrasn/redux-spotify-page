import React from 'react';
import TabsModel from '../../../../data/tabs';

interface TabItemProps {
  tab: TabsModel;
  index: number;
  isActive: boolean;
  handleOnClick: () => void;
  renderTab?: (tab: TabsModel, index: number) => React.ReactNode;
}

export const TabItem = ({
  tab,
  index,
  handleOnClick,
  isActive,
  renderTab
}: TabItemProps) => (
  <li
    className={isActive
      ? 'tabs__tab tabs__tab--is-active'
      : 'tabs__tab'}
    onClick={handleOnClick}
  >
    {!renderTab
      ? tab.label
      : renderTab(tab, index)
    }
  </li>
);
