import React from 'react';
import styles from './Drawer.module.scss';
import { navItems } from './consts';
import Image from 'next/image';
import switchOrgBriefcase from '@/assets/switchOrgBriefcase.svg';
import downChevron from '@/assets/downChevron.svg';

const Drawer = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['item']}>
        <Image src={switchOrgBriefcase} alt="" width={30} height={30} />
        <div className={styles['item__text']}>Switch Organisation </div>
        <Image src={downChevron} alt="" />
      </div>
      <div className={styles['nav-items']}>
        {navItems.map((itemGroup, index) => (
          <div className={styles['group']} key={index}>
            <div className={styles['group__text']}>{itemGroup.title}</div>
            <div className={styles['group__items']}>
              {itemGroup.items.map((item, index) => (
                <div className={styles['item']} key={index}>
                  <Image src={item.icon} alt="" width={30} height={30} />
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
