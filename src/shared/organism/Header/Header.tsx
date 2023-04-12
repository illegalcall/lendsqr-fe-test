import React from 'react';

import { Button } from '@/shared/atoms';
import {
  DownTriangle,
  LendsqrLogoName,
  Notification,
  Search,
  UserProfile,
} from '@/assets';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles['container']}>
      <LendsqrLogoName />
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
          <UserProfile />
          <div className={styles['user-profile__name']}>Adedeji</div>
          <DownTriangle />
        </div>
      </div>
    </div>
  );
};

export default Header;
