import Header from '../components/header/Header';
import PopularSearchesButton from '../components/popular-searches/PopularSearchesButton';
import styles from '../../styles/Home.module.scss';
import Card from '../components/card/Card';
import Footer from '../components/footer/Footer';
import { searchService } from '../store/search/services/search-service';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { referanceService } from '../store/referance/service/referanceService';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import SearchSlice from '../store/search/searchSlice';
import { getSearch } from '../store/search/searchSlice';

type Props = {
  response: any;
};
export default function Home({ response }: Props) {
  const [referance, setReferance] = useState<any>([]);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.search.data);
  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    row: 2,
    slidesPerRow: 6,
    autoplay: true,
  };
  const getReferance = () => {
    // SSR ile yazdığım api'yi burada çağırıyorum
    referanceService
      .getReferanceList()
      .then((res) => {
        setReferance(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getReferance();
    dispatch(getSearch());
  }, []);
  return (
    <>
      <Header />
      <div className={styles.populerSearch}>
        <span>Popüler Aramalar</span>
        {data?.map((item: any) => {
          return <PopularSearchesButton key={item.id} content={item.name} />;
        })}
      </div>
      <div className={styles.containerBg}>
        <div className={styles.container}>
          <div className={styles.slider}>
            <p> Öne çıkan iş ilanları </p>
            <div className={styles.sliderBorder}>
              <Slider {...settings}>
                <div>
                  <div className={styles.slideItem}>
                    <p>IT Müdürü</p>
                    <span>Bosch</span>
                    <div className={styles.image}>
                      <img src='../static/images/referans/bsh@2x.png' alt='' />
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.slideItem}>
                    <p>Front-end Developer</p>
                    <span>Aktif Bank Genel Mü…</span>
                    <div className={styles.image}>
                      <img src='../static/images/referans/7-aktif-bank@2x.png' alt='' />
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.slideItem}>
                    <p>Back-end Dev…</p>
                    <span>Akbank</span>
                    <div className={styles.image}>
                      <img src='../static/images/referans/2-akbank@2x.png' alt='' />
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.slideItem}>
                    <p>.net Developer</p>
                    <span>Arçelik</span>
                    <div className={styles.image}>
                      <img src='../static/images/referans/arc-elik@2x.png' alt='' />
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.slideItem}>
                    <p>Junior .net Dev…</p>
                    <span>Allianz</span>
                    <div className={styles.image}>
                      <img src='../static/images/referans/8-allianz@2x.png' alt='' />
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.slideItem}>
                    <p>Sales Manager</p>
                    <span>Bezmialem Vakıf</span>
                    <div className={styles.image}>
                      <img src='../static/images/referans/bezmialem@2x.png' alt='' />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <section className={styles.main}>
            <div>
              {' '}
              <Card />
            </div>
            <div>
              {' '}
              <Card />
            </div>
          </section>

          <section className={styles.referance}>
            {referance.map((item: any, i: number) => {
              return (
                <div key={i}>
                  <img width={item.width} src={item.image} alt={item.alt} />
                </div>
              );
            })}
          </section>
          <section className={styles.jobPostings}>
            <span>Sizin için iş ilanları</span>
            <div className={styles.content}>
              <div>
                <h5>Popüler Kategoriler</h5>
                <p>Yazılım Geliştirme</p>
                <p>Mobil Uygulama Geliştirme</p>
                <p>Kullanıcı Deneyimi</p>
                <p>Kullanılabilirlik</p>
                <p>Proje Yönetimi</p>
                <p>İş Analizi</p>
              </div>
              <div>
                {' '}
                <h5>Popüler Başlıklar</h5>
                <p>Yazılım Geliştirme</p>
                <p>Mobil Uygulama Geliştirme</p>
                <p>Kullanıcı Deneyimi</p>
                <p>Kullanılabilirlik</p>
                <p>Proje Yönetimi</p>
                <p>İş Analizi</p>
              </div>
              <div>
                {' '}
                <h5>Popüler Lokasyonlar</h5>
                <p>Yazılım Geliştirme</p>
                <p>Mobil Uygulama Geliştirme</p>
                <p>Kullanıcı Deneyimi</p>
                <p>Kullanılabilirlik</p>
                <p>Proje Yönetimi</p>
                <p>İş Analizi</p>
              </div>
              <div>
                {' '}
                <h5>Popüler Şirket İlanları</h5>
                <p>Yazılım Geliştirme</p>
                <p>Mobil Uygulama Geliştirme</p>
                <p>Kullanıcı Deneyimi</p>
                <p>Kullanılabilirlik</p>
                <p>Proje Yönetimi</p>
                <p>İş Analizi</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
