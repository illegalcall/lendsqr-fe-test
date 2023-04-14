import React from 'react';
import classNames from 'classnames';

import { SwitchOrgBriefcase, DownChevron, Logout } from '@/assets/index';

import { navItems } from './consts';
import { useDrawer } from './hooks';

import styles from './Drawer.module.scss';

interface Props {
  isDrawerOpen: boolean;
}

const Drawer: React.FC<Props> = ({ isDrawerOpen }) => {
  const { checkRouteSelected, handleClick } = useDrawer();
  const getSelectedRouteClassName = (route: string) => {
    return classNames(
      styles['item'],
      checkRouteSelected(route) && styles['item-selected']
    );
  };

  return (
    <div
      className={`${styles['container']} ${!isDrawerOpen && styles['closed']}`}
    >
      <div className={styles['item']}>
        <SwitchOrgBriefcase />
        <div className={styles['item__text']}>Switch Organisation </div>
        <DownChevron />
      </div>
      <div className={styles['nav-items']}>
        {navItems.map((itemGroup, index) => (
          <div className={styles['group']} key={index}>
            <div className={styles['group__title']}>{itemGroup.title}</div>
            <div className={styles['group__items']}>
              {itemGroup.items.map((item, index) => (
                <div
                  className={getSelectedRouteClassName(item.path)}
                  key={index}
                  onClick={() => handleClick(item.path)}
                >
                  {item.icon}
                  <div className={styles['item__text']}>{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles['logout']} ${styles['item']}`}>
        <Logout />
        <div className={styles['item__text']}>Logout </div>
        <div className={styles['version']}>v1.2.0</div>
      </div>
    </div>
  );
};

export default Drawer;
