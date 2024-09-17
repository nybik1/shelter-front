import React from 'react';
import styles from './Input.module.scss';
import cs from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  inputSize?: 'small' | 'medium' | 'large';
  error?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  placeholder,
  value,
  onChange,
  type = 'text',
  name,
  inputSize = 'medium',
  error,
  disabled,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div
        className={cs(styles.wrapper, {
          [styles.small]: inputSize === 'small',
          [styles.large]: inputSize === 'large',
          [styles.filled]: value,
          [styles.error]: error,
          [styles.disabled]: disabled,
        })}
      >
        <div className={styles.container}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <input
            {...props}
            id={name}
            className={styles.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
