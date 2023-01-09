import React from 'react';
import styles from './Header.module.scss';
import Button from '../button/Button';

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.loginButtons}>
          <Button text='Kayıt Ol' />
          <Button text='Giriş Yap' />
        </div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <div className={styles.logoImage}>
              <img className={styles.headerLogo} src='../../../static/images/logos/logo@2x.png' alt='' />
            </div>
            <div className={styles.logoText}>
              <img className={styles.headerText} src='../../../static/images/text/header-text@2x.png' alt='' />
            </div>
          </div>
          <div className={styles.search}>
            <div className={styles.searchBarInput}>
              <div className={styles.InputContent}>
                <img width={24} height={24} className={styles.searchIcon} src='../../../static/svg/icon-filled-search.svg' alt='' />
              </div>
              <input placeholder='İş Ara | İş, Şirket, Anahtar Kelime' className={styles.searchBar} type='text' />
            </div>
            <div className={styles.searchBarButtons}>
              <button>
                <img src='../../../static/svg/group-6.svg' alt='' />
              </button>
              <a href='#'>Detaylı Arama</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
