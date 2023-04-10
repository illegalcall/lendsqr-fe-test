import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import lendsqrLogoName from '@/assets/lendsqrLogoName.svg';
import searchIcon from '@/assets/searchIcon.svg';
import { Button } from '@/shared/atoms';
import userProfile from '@/assets/userProfile.svg';
import downTriangle from '@/assets/downTriangle.svg';
import notificationIcon from '@/assets/notificationIcon.svg';

const Header = () => {
  return (
    <div className={styles['container']}>
      <Image src={lendsqrLogoName} alt="logo" />
      <div className={styles['input']}>
        <input type="text" placeholder="Search for anything" />
        <Button>
          <Image src={searchIcon} alt="search" width={20} height={20} />
        </Button>
      </div>
      <div className={styles['user-profile-container']}>
        <div className={styles['docs']}>Docs</div>
        <div className={styles['item']}>
          <Image src={notificationIcon} alt="notification bell" />
        </div>
        <div className={styles['user-profile']}>
          <Image
            src={userProfile}
            className={styles['user-profile__image']}
            alt={'user-profile-picture'}
          />
          <div className={styles['user-profile__name']}>Adedeji</div>
          <Image src={downTriangle} alt={'dropdown-open-icon'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
