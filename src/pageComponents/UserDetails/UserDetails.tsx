import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import { Button, Card } from '@/shared/atoms';

import { userDetailTabs } from './consts';
import { GeneralDetails } from './components';

import styles from './UserDetails.module.scss';
import { Avatar, LeftArrow, StarFilled, StarUnfilled } from '@/assets';
import { useUserDetails } from './hooks';

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

  const { userDetails } = useUserDetails();

  return (
    <div className={styles['container']}>
      <div className={styles['back']} onClick={handleBack}>
        <LeftArrow />
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
            <Avatar />
            <div className={styles['user-name-container']}>
              <div className={styles['name']}>
                {userDetails?.profile?.firstName}{' '}
                {userDetails?.profile?.lastName}
              </div>
              <div className={styles['id']}>{userDetails?.profile.bvn}</div>
            </div>
          </div>
          <div className={styles['user-tier']}>
            <div className="">User{"'"}s Tier</div>
            <div className="">
              <StarFilled />
              <StarUnfilled />
              <StarUnfilled />
            </div>
          </div>
          <div className={styles['account']}>
            <div className={styles['account__amount']}>
              {userDetails?.profile.currency} {userDetails?.accountBalance}
            </div>
            <div className={styles['account__detail']}>
              {userDetails?.accountNumber}/Providus Bank
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
      <GeneralDetails data={userDetails} />
    </div>
  );
};

export default UserDetails;
