import React from 'react';

import { Button, Input } from '@/shared/atoms';
import loginIllus from '@/assets/images/login-illus.svg';
import lendsqrNameLogo from '@/assets/images/lendsqr-name-logo.svg';

import Image from 'next/image';

import styles from './Login.module.scss';
import axios, { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { APIService } from '@/service';

const Login = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [error, setError] = React.useState<string | undefined>();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const apiService = new APIService();
    return await apiService.login(
      e.target.email.value,
      e.target.password.value
    );
  };

  const toggleShowPassword = () => {
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  };

  //write a react query mutation which will call the login api and send email.value, password.value as payload
  const { mutate } = useMutation(handleLogin, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      queryClient.invalidateQueries('users');
      router.push('/dashboard');
    },
    onError: (error: AxiosError) => {
      console.log(error);
      setError((error?.response?.data as any).err);
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
          <form
            data-cy="login-input-form"
            className={styles['login-input']}
            onSubmit={(e) => {
              e.preventDefault();
              mutate(e);
            }}
          >
            <Input
              data-cy="login-input-form-email"
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              error={error}
            />

            <div className={styles['login-input__password']}>
              <Input
                data-cy="login-input-form-password"
                placeholder="Password"
                type="password"
                name="password"
                id="password"
              />

              <span className={styles['show']} onClick={toggleShowPassword}>
                Show
              </span>
            </div>
            <a href="#" className={styles['forgot-password']}>
              Forgot Password?
            </a>
            <Button
              data-cy="login-input-form-login-button"
              fullWidth
              className={styles['login-btn']}
              type="submit"
            >
              LOG IN
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
