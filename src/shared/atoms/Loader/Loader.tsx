import React from 'react';
import Image from 'next/image';
import loaderGif from '@/assets/images/loader.gif';
import styles from './Loader.module.scss';

const Loader = () => {
  return <Image src={loaderGif} alt="loader" className={styles['container']} />;
};

export default Loader;
