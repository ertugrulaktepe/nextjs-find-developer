import React from 'react';
import styles from './Footer.module.scss';
type Props = {
  is_profile?: boolean;
};
const Footer = ({ is_profile }: Props) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.content}>
            <span>2020 Finddeveloper.net</span>
            <div className={styles.rightContent}>
              <span>Gizlilik Merkezi</span>
              <span>Çerezler</span>
              <span>Gizlilik</span>
              <p>Şartlar</p>
            </div>

            <span>Finddeveloper’da Çalışmak</span>
            <div className={styles.leftContent}>
              <span>Hakkımızda</span>
              <span>Yardım Merkezi</span>
              <div>Türkçe</div>
            </div>
          </div>
          {is_profile ? null : (
            <div className={styles.about}>
              <img width={80} height={80} src='../../../static/images/logos/iskur-logo@2x.png' alt='' />
              <p>
                Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak 31/08/2018-30/08/2021 tarihleri arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124 sayılı
                karar uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için aşağıdaki
                telefon numaralarına başvurabilirsiniz. Diğer iller için tıklayın. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye
                Hizmet Merkezi :
                <br />
                <span>0216 523 90 26</span>
              </p>
            </div>
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;
