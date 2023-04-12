import React from 'react';
import { useRouter } from 'next/router';

import { Card } from '@/shared/atoms';
import { ViewEye, BlacklistUser, ActivateUser } from '@/assets';

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
        <ViewEye />
        View Details
      </div>
      <div className={styles['actions-card__item']}>
        <BlacklistUser />
        Blacklist User
      </div>
      <div className={styles['actions-card__item']}>
        <ActivateUser />
        Activate User
      </div>
    </Card>
  );
};

export default Actions;
