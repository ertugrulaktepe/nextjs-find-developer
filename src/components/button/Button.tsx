import React from 'react';
import styles from './Button.module.scss';
type Props = {
  text: string;
  onClick?: () => void;
};
const Button = ({ text, onClick }: Props) => {
  return (
    <button type='button' className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
