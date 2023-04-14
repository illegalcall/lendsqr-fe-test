import React from 'react';

import { Drawer, Header } from '@/shared/organism';

import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className={styles['container']}>
      <Header isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <div className={styles['children-sidebar-container']}>
        <Drawer isDrawerOpen={isDrawerOpen} />
        <div className={styles['children']}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
