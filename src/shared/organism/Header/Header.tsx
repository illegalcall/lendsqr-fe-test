import React from 'react';
import Image from 'next/image';

import { Button } from '@/shared/atoms';
import { DownTriangle, Notification, Search, UserProfile } from '@/assets';
import lendsqrNameLogo from '@/assets/images/lendsqr-name-logo.svg';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles['container']}>
      <Image src={lendsqrNameLogo} alt="lendsqr" />
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
  );
};

export default Header;
