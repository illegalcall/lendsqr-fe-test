import React from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children, className }) => {
  const cx = classNames(styles['container'], className);
  return <div className={cx}>{children}</div>;
};

export default Card;
