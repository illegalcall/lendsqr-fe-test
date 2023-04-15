import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';

import { TableFilter, ActionOption, DownChevron } from '@/assets';

import { Actions } from './components';
import { useTable } from './hooks';

import styles from './Table.module.scss';
import { Filters } from '@/shared/molecules';
import { Card, Loader } from '@/shared/atoms';
interface Props {
  tableHeaders: string[];
  className?: string;
  data: any[];
  pagination?: {
    itemsPerPage: number;
  };
  loading: boolean;
}

const Table: React.FC<Props> = ({
  tableHeaders,
  data,
  pagination,
  loading,
}) => {
  const router = useRouter();
  const itemsPerPage = pagination?.itemsPerPage || 9;
  const {
    convertDate,
    currentItems,
    pageCount,
    handlePageClick,
    isFilterOpen,
    setIsFilterOpen,
    isOptionsOpen,
    setIsOptionsOpen,
    itemOffset,
  } = useTable(data, itemsPerPage);

  if (loading) return <Loader />;

  return (
    <div className="">
      <Card>
        <div className={styles['container']}>
          <table className={styles['table']}>
            <thead className={styles['header-container']}>
              <tr>
                {tableHeaders.map((header, index) => (
                  <th key={index} className={styles['header-item']}>
                    <span>{header}</span>{' '}
                    {header && (
                      <TableFilter
                        onClick={() =>
                          isFilterOpen === index
                            ? setIsFilterOpen(null)
                            : setIsFilterOpen(index)
                        }
                      />
                    )}
                    {isFilterOpen === index ? <Filters /> : ''}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={styles['body-container']}>
              {currentItems?.map((item, index) => (
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
                    <ActionOption
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
      </Card>
      {pagination && (
        <div className={styles['users-paginate']}>
          <div className={styles['user-page-info']}>
            <p>
              Showing{' '}
              <span>
                {itemOffset + itemsPerPage < data.length
                  ? itemOffset + itemsPerPage
                  : data.length}{' '}
                <DownChevron />
              </span>{' '}
              out of {data?.length}
            </p>
          </div>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName={styles['page-item']}
            pageLinkClassName={styles['page-link']}
            previousClassName={styles['arrow']}
            nextClassName={styles['arrow']}
            breakLabel="..."
            containerClassName={styles['pagination']}
            activeClassName={styles['active']}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
