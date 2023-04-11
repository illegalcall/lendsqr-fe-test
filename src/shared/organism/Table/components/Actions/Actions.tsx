import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Card } from '@/shared/atoms';
import activateUser from '@/assets/Action/activateUser.svg';
import blacklistUser from '@/assets/Action/blacklistUser.svg';
import viewEye from '@/assets/Action/viewEye.svg';

import styles from './Actions.module.scss';

interface Props {
  id: string;
}

const Actions: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  return (
    <Card className={styles['actions-card']}>
      <div
        className={styles['actions-card__item']}
        onClick={() => router.push(`/dashboard/users/${id}`)}
      >
        <Image src={viewEye} alt={''} />
        View Details
      </div>
      <div className={styles['actions-card__item']}>
        <Image src={blacklistUser} alt={''} />
        Blacklist User
      </div>
      <div className={styles['actions-card__item']}>
        <Image src={activateUser} alt={''} />
        Activate User
      </div>
    </Card>
  );
};

export default Actions;
