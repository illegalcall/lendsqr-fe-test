import React from 'react';

import { Button } from '@/shared/atoms';
import loginIllus from '@/assets/images/login-illus.svg';
import lendsqrNameLogo from '@/assets/images/lendsqr-name-logo.svg';

import Image from 'next/image';

import styles from './Login.module.scss';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';

const Login = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log('hi here');
    return await axios.post('http://localhost:3000/api/auth/login', {
      email: e.target.email.value,
      password: e.target.password.value,
    });
  };

  //write a react query mutation which will call the login api and send email.value, password.value as payload
  const { mutate } = useMutation(handleLogin, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.data.token);
      queryClient.invalidateQueries('users');
      router.push('/dashboard');
    },
  });

  return (
    <div className={styles['container']}>
      <div className={styles['left-section']}>
        <div className={styles['logo-header']}>
          <Image src={lendsqrNameLogo} alt="lendsqr" />
        </div>
        <div className={styles['landing-page-logo-container']}>
          <Image src={loginIllus} alt="login" />
        </div>
      </div>
      <div className={styles['right-section-container']}>
        <div className={styles['right-section']}>
          <div className={styles['secondary-logo']}>
            <Image src={lendsqrNameLogo} alt="lendsqr" />
          </div>
          <div className={styles['login-header']}>
            <div className={styles['login-header-title']}>Welcome!</div>
            <div className={styles['login-header-subtitle']}>
              Enter details to login.
            </div>
          </div>
          <form className={styles['login-input']} onSubmit={(e) => mutate(e)}>
            <input placeholder="Email" type="email" name="email" id="email" />
            <div className={styles['login-input__password']}>
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
              />
              <span className={styles['show']}>Show</span>
            </div>
            <a href="#" className={styles['forgot-password']}>
              Forgot Password?
            </a>
            <Button fullWidth className={styles['login-btn']} type="submit">
              LOG IN
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
