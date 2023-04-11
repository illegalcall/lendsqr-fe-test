import React from 'react';
import Image from 'next/image';

import { Card } from '@/shared/atoms';
import { userDashboardCardsData } from './consts';

import styles from './Users.module.scss';

const Users = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>Users</div>
      <div className={styles['cards-container']}>
        {userDashboardCardsData.map((card, index) => (
          <Card className={styles['card']} key={index}>
            <Image src={card.icon} alt={card.label} width={40} height={40} />
            <div className={styles['card__title']}>{card.label}</div>
            <div className={styles['card__value']}>{card.value}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Users;
