import React from 'react';
import Image from 'next/image';

import { Card } from '@/shared/atoms';
import { Table } from '@/shared/organism';
import { tableHeaders, userDashboardCardsData } from './consts';

import styles from './Users.module.scss';
import { useQuery, useQueryClient } from 'react-query';
import getUsers from '@/pages/api/users';
import axios from 'axios';
import { useUsers } from './hooks';

const Users = () => {
  const { users } = useUsers();

  return (
    <div className={styles['container']}>
      <div className={styles['title']}>Users</div>
      <div className={styles['cards-container']}>
        {userDashboardCardsData.map((card, index) => (
          <Card className={styles['card']} key={index}>
            {card.icon}
            <div className={styles['card__title']}>{card.label}</div>
            <div className={styles['card__value']}>{card.value}</div>
          </Card>
        ))}
      </div>
      <Card>
        <Table tableHeaders={tableHeaders} data={users} />
      </Card>
    </div>
  );
};

export default Users;
