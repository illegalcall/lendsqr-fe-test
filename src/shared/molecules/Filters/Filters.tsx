import { Button, Card, Input } from '@/shared/atoms';
import React from 'react';
import styles from './Filters.module.scss';

const Filters = () => {
  return (
    <Card className={styles['container']}>
      <div className={styles['select-container']}>
        <label>Organization</label>
        <select className={styles['select']} placeholder="Select"></select>
      </div>
      <Input label="Username" placeholder="User" />
      <Input label="Email" type="email" placeholder="Email" />
      <Input label="Date" type="date" placeholder="Date" />
      <Input label="Phone Number" type="number" placeholder="Phone Number" />
      <div className={styles['select-container']}>
        <label>Status</label>
        <select className={styles['select']}></select>
      </div>
      <div className={styles['btn-container']}>
        <Button theme="transparent" className={styles['reset']} fullWidth>
          Reset
        </Button>
        <Button theme="primary" fullWidth>
          Filter
        </Button>
      </div>
    </Card>
  );
};

export default Filters;
