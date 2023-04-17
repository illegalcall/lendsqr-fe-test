import React from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
  children: React.ReactNode;
  style?: any;
}

const Card: React.FC<Props> = ({ children, className, style }) => {
  const cx = classNames(styles['container'], className);
  return (
    <div style={style} className={cx}>
      {children}
    </div>
  );
};

export default Card;
