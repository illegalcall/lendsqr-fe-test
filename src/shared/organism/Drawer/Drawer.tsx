import React from 'react';
import classNames from 'classnames';

import { SwitchOrgBriefcase, DownChevron } from '@/assets/index';

import { navItems } from './consts';
import { useDrawer } from './hooks';

import styles from './Drawer.module.scss';

const Drawer = () => {
  const { checkRouteSelected, handleClick } = useDrawer();
  const getSelectedRouteClassName = (route: string) => {
    return classNames(
      styles['item'],
      checkRouteSelected(route) && styles['item-selected']
    );
  };

  return (
    <div className={styles['container']}>
      <div className={styles['item']}>
        <SwitchOrgBriefcase />
        <div className={styles['item__text']}>Switch Organisation </div>
        <DownChevron />
      </div>
      <div className={styles['nav-items']}>
        {navItems.map((itemGroup, index) => (
          <div className={styles['group']} key={index}>
            <div className={styles['group__text']}>{itemGroup.title}</div>
            <div className={styles['group__items']}>
              {itemGroup.items.map((item, index) => (
                <div
                  className={getSelectedRouteClassName(item.path)}
                  key={index}
                  onClick={() => handleClick(item.path)}
                >
                  {/* <Image src={item.icon} alt="" width={30} height={30} /> */}
                  <div className={styles['item__text']}>{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drawer;
