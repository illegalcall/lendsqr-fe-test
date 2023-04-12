import React, { useState } from 'react';

import Image from 'next/image';
import tableFilterIcon from '@/assets/tableFilter.svg';
import actionOption from '@/assets/actionOption.svg';

import styles from './Table.module.scss';

import { Actions } from './components';
import { useTable } from './hooks';
import { useRouter } from 'next/router';

interface Props {
  tableHeaders: string[];
  className?: string;
  data: any[];
}

const Table: React.FC<Props> = ({ tableHeaders, data }) => {
  const [isFilterOpen, setIsFilterOpen] = useState<null | Number>(null);
  const [isOptionsOpen, setIsOptionsOpen] = useState<null | Number>(null);
  const router = useRouter();
  const { convertDate } = useTable();
  return (
    <div className={styles['container']}>
      <table className={styles['table']}>
        <thead className={styles['header-container']}>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index} className={styles['header-item']}>
                <span>{header}</span>{' '}
                {header && <Image src={tableFilterIcon} alt={''} />}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles['body-container']}>
          {data.map((item, index) => (
            <tr key={index} className={styles['body-item']}>
              <td className={styles['body-item__data']}>
                <span
                  className={styles['org-name']}
                  onClick={() => router.push(`/dashboard/users/${item.id}`)}
                >
                  {item.orgName}
                </span>
              </td>
              <td className={styles['body-item__data']}>
                <span>{item.userName}</span>
              </td>
              <td className={styles['body-item__data']}>
                <span>{item.email}</span>
              </td>
              <td className={styles['body-item__data']}>
                <span>{item.phoneNumber}</span>
              </td>
              <td className={styles['body-item__data']}>
                <span>{convertDate(item.createdAt)}</span>
              </td>
              <td className={styles['body-item__data']}>
                <span className={styles['tag']}>Active</span>
              </td>
              <td
                className={`${styles['body-item__data']} ${styles['action']}`}
              >
                <Image
                  src={actionOption}
                  alt={''}
                  onClick={() =>
                    isOptionsOpen === index
                      ? setIsOptionsOpen(null)
                      : setIsOptionsOpen(index)
                  }
                />
              </td>
              {isOptionsOpen === index ? <Actions id={item.id} /> : ''}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;