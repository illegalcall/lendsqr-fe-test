import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

type Ref = HTMLInputElement | null;

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<Ref, IInputProps>(
  ({ label, error, className, ...rest }, ref) => {
    return (
      <div className={classNames(styles[`container`], className)}>
        {label && <p className={styles['label']}>{label}</p>}
        <div className={classNames(styles['input-container'])}>
          <input
            className={styles['content']}
            ref={ref}
            type="text"
            {...rest}
          />
        </div>
        {error && <p className={styles[`error`]}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
