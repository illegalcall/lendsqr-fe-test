import React from 'react';
import Image from 'next/image';

import { Card } from '@/shared/atoms';
import { userDashboardCardsData } from './consts';

import styles from './Users.module.scss';
import { Table } from '@/shared/organism';

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
      <Card>
        <Table
          tableHeaders={[
            'Organization',
            'Username',
            'Email',
            'Phone number',
            'Date joined',
            'Status',
            '',
          ]}
          data={[
            {
              createdAt: '2072-12-27T03:44:22.522Z',
              orgName: 'labore-dolor-et',
              userName: 'Wilburn.Rice',
              email: 'Maverick.Hyatt83@gmail.com',
              phoneNumber: '(553) 208-0727 x31321',
              lastActiveDate: '2099-02-28T23:17:40.013Z',
              profile: {
                firstName: 'Darian',
                lastName: 'Rolfson',
                phoneNumber: '494-278-0946',
                avatar:
                  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg',
                gender: 'Male',
                bvn: '815809412',
                address: 'Gusikowski Locks',
                currency: 'NGN',
              },
              guarantor: {
                firstName: 'Celine',
                lastName: 'Monahan',
                phoneNumber: '1-482-227-3654 x71086',
                gender: 'Male',
                address: "O'Hara Centers",
              },
              accountBalance: '496.00',
              accountNumber: 'GWQUSEH1',
              socials: {
                facebook: '@lendsqr',
                instagram: '@lendsqr',
                twitter: '@lendsqr',
              },
              education: {
                level: 'Bsc',
                employmentStatus: 'Employed',
                sector: 'FinTech',
                duration: '2 Years',
                officeEmail: 'Edna4@yahoo.com',
                monthlyIncome: ['128.57', '118.07'],
                loanRepayment: '122.47',
              },
              id: '1',
            },
            {
              createdAt: '2072-12-27T03:44:22.522Z',
              orgName: 'labore-dolor-et',
              userName: 'Wilburn.Rice',
              email: 'Maverick.Hyatt83@gmail.com',
              phoneNumber: '(553) 208-0727 x31321',
              lastActiveDate: '2099-02-28T23:17:40.013Z',
              profile: {
                firstName: 'Darian',
                lastName: 'Rolfson',
                phoneNumber: '494-278-0946',
                avatar:
                  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg',
                gender: 'Male',
                bvn: '815809412',
                address: 'Gusikowski Locks',
                currency: 'NGN',
              },
              guarantor: {
                firstName: 'Celine',
                lastName: 'Monahan',
                phoneNumber: '1-482-227-3654 x71086',
                gender: 'Male',
                address: "O'Hara Centers",
              },
              accountBalance: '496.00',
              accountNumber: 'GWQUSEH1',
              socials: {
                facebook: '@lendsqr',
                instagram: '@lendsqr',
                twitter: '@lendsqr',
              },
              education: {
                level: 'Bsc',
                employmentStatus: 'Employed',
                sector: 'FinTech',
                duration: '2 Years',
                officeEmail: 'Edna4@yahoo.com',
                monthlyIncome: ['128.57', '118.07'],
                loanRepayment: '122.47',
              },
              id: '1',
            },
            {
              createdAt: '2072-12-27T03:44:22.522Z',
              orgName: 'labore-dolor-et',
              userName: 'Wilburn.Rice',
              email: 'Maverick.Hyatt83@gmail.com',
              phoneNumber: '(553) 208-0727 x31321',
              lastActiveDate: '2099-02-28T23:17:40.013Z',
              profile: {
                firstName: 'Darian',
                lastName: 'Rolfson',
                phoneNumber: '494-278-0946',
                avatar:
                  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg',
                gender: 'Male',
                bvn: '815809412',
                address: 'Gusikowski Locks',
                currency: 'NGN',
              },
              guarantor: {
                firstName: 'Celine',
                lastName: 'Monahan',
                phoneNumber: '1-482-227-3654 x71086',
                gender: 'Male',
                address: "O'Hara Centers",
              },
              accountBalance: '496.00',
              accountNumber: 'GWQUSEH1',
              socials: {
                facebook: '@lendsqr',
                instagram: '@lendsqr',
                twitter: '@lendsqr',
              },
              education: {
                level: 'Bsc',
                employmentStatus: 'Employed',
                sector: 'FinTech',
                duration: '2 Years',
                officeEmail: 'Edna4@yahoo.com',
                monthlyIncome: ['128.57', '118.07'],
                loanRepayment: '122.47',
              },
              id: '1',
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default Users;
