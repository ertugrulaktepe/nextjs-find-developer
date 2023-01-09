import React from 'react';
import Header from '../../components/header/Header';
import styles from './Profile.module.scss';
import Aside from '../../components/aside/Aside';
import Footer from '../../components/footer/Footer';
const Profile = () => {
  return (
    <>
      <header>
        <div className={styles.header}>
          <img width={200} src='../../../static/images/logos/logo@2x.png' alt='' />
        </div>
        <div className={styles.subHeader}>
          {' '}
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
            </div>
          </div>
        </div>
      </header>
      <div className={styles.bg}>
        <div className={styles.bgBottom}>
          <div className={styles.main}>
            <div className={styles.aside}>
              <Aside />
            </div>
            <div className={styles.content}>
              <div className={styles.container}>
                <div className='content-item'>
                  <div className={styles.contentHeader}>Profil</div>
                  <div className={styles.title}>
                    <p className={styles.subTitle}>Profesyonel Bakış</p>
                    <p className={styles.edit}>Düzenle</p>
                  </div>
                  <div className={styles.contentBody}>
                    <p className={styles.contentText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
                <div className='content-item'>
                  <div className={styles.title}>
                    <div className={styles.contentHeaderCustom}>Deneyim</div>
                    <p className={styles.edit}>Düzenle</p>
                  </div>
                  <div className={styles.contentBody}>
                    <span className={styles.contentTitle}>Founder</span>
                    <span className={styles.contentSubTitle}>Neyasis Technology</span>
                    <span className={styles.address}> February 2014 - Present (6 Years , 10 Months)</span>
                    <span className={styles.address}> Armonk- New York /ABD</span>
                    <p className={styles.contentText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
                <div className='content-item'>
                  <div className={styles.title}>
                    <div className={styles.contentHeaderCustom}>Eğitim</div>
                    <p className={styles.edit}>Düzenle</p>
                  </div>
                  <div className={styles.contentBody}>
                    <span className={styles.contentTitle}>Bahçeşehir Üniversitesi</span>

                    <span className={styles.contentCustomSubTitle}> Master Degree</span>
                    <span className={styles.address}> Computer & Information Scienses</span>

                    <span className={styles.address}> 2015-2019</span>
                    <span style={{ marginTop: '25px' }} className={styles.contentTitle}>
                      Boğaziçi Üniversitesi
                    </span>

                    <span className={styles.contentCustomSubTitle}> Bachelor’s Degree</span>
                    <span className={styles.address}> Political Science and International Relations</span>

                    <span className={styles.address}>2010-2015</span>
                  </div>
                </div>
                <div className='content-item'>
                  <div className={styles.title}>
                    <div className={styles.contentHeaderCustom}>Sertifikalar</div>
                    <p className={styles.edit}>Düzenle</p>
                  </div>
                  <div className={styles.contentBody}>
                    <span className={styles.contentTitle}>MCP (Microsoft Certified Professional)</span>

                    <span className={styles.contentCustomSubTitle}> Microsoft</span>
                    <span className={styles.address}> January 2015</span>
                  </div>
                </div>
                <div className='content-item'>
                  <div className={styles.title}>
                    <div className={styles.contentHeaderCustom}>Yetenekler</div>
                    <p className={styles.edit}>Düzenle</p>
                  </div>
                  <div className={styles.abilitiesBody}>
                    <div className={styles.abilities}>
                      <img src='../../../static/svg/list.svg' alt='' /> <span>C#.Net (10 years)</span>
                    </div>
                    <div className={styles.abilities}>
                      <img src='../../../static/svg/list.svg' alt='' /> <span>Swift (5 years)</span>
                    </div>
                    <div className={styles.abilities}>
                      <img src='../../../static/svg/list.svg' alt='' /> <span>React (3 years)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer is_profile={true} />
    </>
  );
};

export default Profile;
