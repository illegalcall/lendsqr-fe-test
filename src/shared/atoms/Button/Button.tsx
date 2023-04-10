import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
  theme?: 'primary' | 'secondary' | 'transparent';
  loading?: boolean;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement | null, Props>(
  (
    {
      children,
      theme = 'primary',
      fullWidth = false,
      loading,
      className,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        type="button"
        ref={ref}
        className={classNames(
          styles[`container-${theme}`],
          !loading && !disabled && styles[`container-enabled`],
          disabled && styles[`container-disabled`],
          styles[`container-${fullWidth ? 'full' : 'min-content'}`],
          className
        )}
        disabled={disabled}
        {...rest}
      >
        <p className={styles[`text-${theme}`]}>{children}</p>
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
