import React from 'react';
import styles from './Info.module.scss';
import cs from 'classnames';
import AlertSVG from '../../../public/alert.svg';

interface InfoProps {
  title: string;
  text: string;
  error?: boolean;
}

const Info: React.FC<InfoProps> = ({ title, text, error = false }) => {
  return (
    <div
      className={cs(styles.root, {
        [styles.error]: error,
      })}
    >
      <div className={styles.titleWrapper}>
        <div className={styles.icon}>
          <AlertSVG />
        </div>
        <p className={styles.title}>{title}</p>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Info;
