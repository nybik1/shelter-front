import React, { ButtonHTMLAttributes } from 'react';
import cs from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  label: string;
  disabled?: boolean;
  LeftIcon?: any;
  RightIcon?: any;
}

const Button:React.FC<ButtonProps> = ({
  buttonType = 'primary',
  size = 'medium',
  label,
  disabled = false,
  LeftIcon,
  RightIcon,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={cs(styles.button, {
        [styles.secondary]: buttonType === 'secondary',
        [styles.ghost]: buttonType === 'ghost',
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
      })}
      {...props}
    >
      {LeftIcon && (
        <div className={cs(styles.icon, styles.leftIcon)}>
          <LeftIcon />
        </div>
      )}
      {label}
      {RightIcon && (
        <div className={cs(styles.icon, styles.rightIcon)}>
          <RightIcon />
        </div>
      )}
    </button>
  );
};

export default Button;
