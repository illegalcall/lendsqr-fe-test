import React from 'react';

import { Button } from '@/shared/atoms';
import { LandingPageLogo, LendsqrLogoName } from '@/assets';

import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['left-section']}>
        <div className={styles['logo-header']}>
          <LendsqrLogoName />
        </div>
        <LandingPageLogo />
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
          <Button fullWidth className={styles['login-btn']}>
            LOG IN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
