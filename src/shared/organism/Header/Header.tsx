import React from 'react';
import Image from 'next/image';

import { Button } from '@/shared/atoms';
import {
  Close,
  DownTriangle,
  Hamburger,
  Notification,
  Search,
  UserProfile,
} from '@/assets';
import lendsqrNameLogo from '@/assets/images/lendsqr-name-logo.svg';

import styles from './Header.module.scss';

interface Props {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

const Header: React.FC<Props> = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <div className={styles['container']}>
      <Image src={lendsqrNameLogo} alt="lendsqr" />
      <div className={styles['header-content']}>
        <div className={styles['input']}>
          <input type="text" placeholder="Search for anything" />
          <Button>
            <Search />
          </Button>
        </div>
        <div className={styles['user-profile-container']}>
          <div className={styles['docs']}>Docs</div>
          <div className={styles['item']}>
            <Notification />
          </div>
          <div className={styles['user-profile']}>
            <UserProfile className={styles['user-profile__image']} />
            <div className={styles['user-profile__name']}>Adedeji</div>
            <DownTriangle />
          </div>
        </div>
      </div>
      {isDrawerOpen === false ? (
        <Hamburger className={styles['hamburger']} onClick={toggleDrawer} />
      ) : (
        <Close className={styles['close']} onClick={toggleDrawer} />
      )}
    </div>
  );
};

export default Header;
