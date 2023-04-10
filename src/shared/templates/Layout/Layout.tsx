import React from 'react';
import { Drawer, Header } from '@/shared/organism';
import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles['container']}>
      <Header />
      <div className={styles['children-sidebar-container']}>
        <Drawer />
        <div className={styles['children']}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
