import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import { Button, Card } from '@/shared/atoms';

import leftArrow from '@/assets/leftArrow.svg';
import avatar from '@/assets/avatar.svg';
import starFilled from '@/assets/starFilled.svg';
import starUnfilled from '@/assets/starUnfilled.svg';

import { userDetailTabs } from './consts';
import { GeneralDetails } from './components';

import styles from './UserDetails.module.scss';

const UserDetails = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState<string>('general');
  const tabClassName = (route: string) => {
    return classNames(styles['tab'], {
      [styles['tab-active']]: activeTab === route,
    });
  };
  const handleBack = () => {
    router.push('/dashboard/users');
  };
  const handleTabClick = (route: string) => {
    //Something like this can be implemented to handle tab click
    // router.push(`${router.asPath}/${route}`);
    setActiveTab(route);
  };

  //TODO: remove dummy data
  const dummyUserDetail = {
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
  };

  return (
    <div className={styles['container']}>
      <div className={styles['back']} onClick={handleBack}>
        <Image src={leftArrow} alt="" />
        Back to Users
      </div>
      <div className={styles['title-container']}>
        <div className={styles['title']}>User Details</div>
        <div className={styles['btn-container']}>
          <Button theme="transparent" className={styles['blacklist']}>
            Blacklist User
          </Button>
          <Button theme="transparent" className={styles['activate']}>
            Activate User
          </Button>
        </div>
      </div>
      <Card className={styles['user-info-header-card']}>
        <div className={styles['user-info-header']}>
          <div className={styles['user-avatar-container']}>
            <Image src={avatar} alt="" />
            <div className={styles['user-name-container']}>
              <div className={styles['name']}>Grace Effiom</div>
              <div className={styles['id']}>LSQFf12dasdb</div>
            </div>
          </div>
          <div className={styles['user-tier']}>
            <div className="">User{"'"}s Tier</div>
            <div className="">
              <Image src={starFilled} alt={''} />
              <Image src={starUnfilled} alt={''} />
              <Image src={starUnfilled} alt={''} />
            </div>
          </div>
          <div className={styles['account']}>
            <div className={styles['account__amount']}>₦200,000.00</div>
            <div className={styles['account__detail']}>
              9912345678/Providus Bank
            </div>
          </div>
        </div>
        <div className={styles['tabs-container']}>
          {userDetailTabs.map((tab, index) => (
            <div
              key={index}
              className={tabClassName(tab.route)}
              onClick={() => handleTabClick(tab.route)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </Card>
      <GeneralDetails data={dummyUserDetail} />
    </div>
  );
};

export default UserDetails;
