import React from 'react';
import styles from './Aside.module.scss';
const Aside = () => {
  return (
    <div>
      <div className={styles.profilePhoto}>
        <img src='../../../static/svg/group-3.svg' alt='' />
      </div>
      <div className={styles.user}>
        <p className={styles.userName}>Nesil AKSOY</p>
        <span className={styles.userJob}>UX Designer</span>
        <p className={styles.userJob}>Türkiye, İstanbul, Sarıyer</p>
        <span className={styles.userJob}>eray_karakullukcu.neyasis.com</span>
        <span className={styles.userJob}>+90 555 66 44</span>
        <a className={styles.link} href='#'>
          <img src='../../../static/svg/shape.svg' alt='' />
          <span>Find CV'mi İndir</span>
        </a>
        <a className={styles.updateProfile} href='#'>
          Profili Düzenle
        </a>
      </div>
      <div className={styles.social}>
        <p className={styles.socialHeader}>Web Sitesi</p>
        <div className={styles.socialLink}>
          <a href='#'>
            <img src='../../../static/svg/linkedln.svg' alt='' />
          </a>
          <a href='#'>
            {' '}
            <img src='../../../static/svg/github.svg' alt='' />
          </a>
          <a href='#'>
            {' '}
            <img src='../../../static/svg/1.svg' alt='' />
          </a>
          <a href='#'>
            {' '}
            <img src='../../../static/svg/chat.svg' alt='' />
          </a>
          <a href='#'>
            {' '}
            <img src='../../../static/svg/drip.svg' alt='' />
          </a>
          <a href='#'>
            {' '}
            <img src='../../../static/svg/face.svg' alt='' />
          </a>
          <a href='#'>
            {' '}
            <img src='../../../static/svg/twitter.svg' alt='' />
          </a>
          <a href='#'>
            {' '}
            <img src='../../../static/svg/web.svg' alt='' />
          </a>
        </div>
        <p>
          <a className={styles.updateProfile} href='#'>
            Düzenle
          </a>
        </p>
      </div>
      <div className={styles.social}>
        <p className={styles.socialHeader}>Dökümanlar</p>
        <div className={styles.document}>
          <div className={styles.file}>
            <img src='../../../static/svg/icon-filled-file.svg' alt='' />
            <span>eraycv.docx</span>
            <a href='#'>
              <img src='../../../static/svg/icon-filled-cross.svg' alt='' />
            </a>
          </div>
          <div className={styles.file}>
            <img src='../../../static/svg/pdf.svg' alt='' />
            <span>eraycv.docx</span>
            <a href='#'>
              <img src='../../../static/svg/icon-filled-cross.svg' alt='' />
            </a>
          </div>
          <div className={styles.file}>
            <img src='../../../static/svg/pdf.svg' alt='' />
            <span>eraycv.docx</span>
            <a href='#'>
              <img src='../../../static/svg/icon-filled-cross.svg' alt='' />
            </a>
          </div>
        </div>
        <p>
          <a className={styles.updateProfile} href='#'>
            Başka bir döküman ekle
          </a>
        </p>
      </div>
      <div className={styles.social}>
        <p className={styles.socialHeader}>Kaydedilen Aramalarım</p>
        <div className={styles.document}>
          <div className={styles.file}>
            <img src='../../../static/svg/job.svg' alt='' />
            <span>Neyasis Tech.</span>
            <a href='#'>
              <img src='../../../static/svg/icon-filled-cross.svg' alt='' />
            </a>
          </div>
          <div className={styles.file}>
            <img src='../../../static/svg/job.svg' alt='' />
            <span>Apple</span>
            <a href='#'>
              <img src='../../../static/svg/icon-filled-cross.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.social}>
        <p className={styles.socialHeader}>Başvurularım</p>
        <div className={styles.document}>
          <div className={styles.file}>
            <img src='../../../static/svg/icon2.svg' alt='' />
            <span>Neyasis Tech.</span>
            <a href='#'>
              <img src='../../../static/svg/icon-filled-cross.svg' alt='' />
            </a>
          </div>
        </div>
        <p>
          <a className={styles.updateProfile} href='#'>
            Tümünü Gör
          </a>
        </p>
      </div>
    </div>
  );
};

export default Aside;
