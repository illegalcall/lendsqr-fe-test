import React from 'react';
import styles from './Login.module.scss';
import lendsqrLogo from '@/assets/lendsqrLogo.svg';
import landingPageLogo from '@/assets/landingPageLogo.svg';
import { Button } from '../../shared/atoms';
import Image from 'next/image';

const Login = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['left-section']}>
        <div className={styles['logo-header']}>
          <Image src={lendsqrLogo} alt="" />
          <div>lendsqr</div>
        </div>
        <Image src={landingPageLogo} alt="" />
      </div>
      <div className={styles['right-section']}>
        <div className={styles['login-header']}>
          <div className={styles['login-header-title']}>Welcome!</div>
          <div className={styles['login-header-subtitle']}>
            Enter details to login.
          </div>
        </div>
        <div className={styles['login-input']}>
          <input placeholder="Email" type="email" />
          <div className={styles['login-input__password']}>
            <input placeholder="Password" type="password" />
            <span className={styles['show']}>Show</span>
          </div>
          <a href="#" className={styles['forgot-password']}>
            Forgot Password?
          </a>
          <Button text={'LOG IN'} fullWidth className={styles['login-btn']} />
        </div>
      </div>
    </div>
  );
};

export default Login;
