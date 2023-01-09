import React from 'react';
import styles from './Button.module.scss';
type Props = {
  content: string;
};
const PopularSearchesButton = ({ content }: Props) => {
  return (
    <>
      <button className={styles.button}>{content}</button>
    </>
  );
};

export default PopularSearchesButton;
