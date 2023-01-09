import React from 'react';
import styles from './Card.module.scss';
const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <div className='card-content'>
          <img src='../../../static/images/ara@2x.png' alt='' />
        </div>
        <div className={styles.cardButton}>
          <button>İş Ara</button>
          <div>|</div>
          <button>Profilini Oluştur</button>
        </div>
      </div>
    </>
  );
};

export default Card;
