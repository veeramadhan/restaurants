import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { useTranslation } from 'react-i18next';
import "./Home.css";
import nigiraa from "../../Assets/nigiraa.png";
import mahi from "../../Assets/mahirool.jpg";
import sashmi from "../../Assets/sashmi.jpeg";
import cheff from "../../Assets/cheff.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease',
      once: false,
      anchorPlacement: 'top-center',
    });

    // Remove AOS effect on mobile devices
    const handleResize = () => {
      const elements = document.querySelectorAll('[data-aos]');
      if (window.innerWidth < 576) {
        elements.forEach((el) => {
          el.removeAttribute('data-aos');
        });
      } else {
        elements.forEach((el) => {
          el.setAttribute('data-aos', 'fade-left');
        });
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Check on resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
    <Element name="home" className="homeMain">
      <div className="container-fluid d-lg-flex flex-lg-row flex-sm-column flex-wrap align-items-center justify-content-center mt-lg-5 gap-lg-5">
        <div className="col-12 col-md-7 leftContent" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="title">{t('home.nigiri_sushi')}</h1>
          <p className="ptxt">{t('home.nigiri_description')}</p>
        </div>
        <div className="col-12 col-md-3">
          <img src={nigiraa} className="nigirisushi col-12" alt={t('home.nigiri_sushi')} />
        </div>
      </div>

      <div className="container-fluid d-lg-flex flex-lg-row flex-sm-column flex-wrap align-items-center justify-content-center mt-lg-5 gap-lg-5">
        <div className="col-12 col-md-3">
          <img src={mahi} className="nigirisushi col-12" alt={t('home.maki_rolls')} />
        </div>
        <div className="col-12 col-md-7 leftContent" data-aos="fade-left" data-aos-duration="1000">
          <h1 className="title">{t('home.maki_rolls')}</h1>
          <p className="ptxt">{t('home.maki_description')}</p>
        </div>
      </div>

      <div className="container-fluid d-lg-flex flex-lg-row flex-sm-column flex-wrap align-items-center justify-content-center mt-lg-5 gap-lg-5">
        <div className="col-12 col-md-7 leftContent" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="title">{t('home.sashimi_platter')}</h1>
          <p className="ptxt">{t('home.sashimi_description')}</p>
        </div>
        <div className="col-12 col-md-3">
          <img src={sashmi} className="nigirisushi col-12" alt={t('home.sashimi_platter')} />
        </div>
      </div>

      <div className="container-fluid cheffMain mt-5">
        <img src={cheff} className="cheff col-12" alt={t('home.chef')} />
        <div className="cheffContent col-12 col-md-4" data-aos="zoom-in" data-aos-duration="1000">
          <p>{t('home.cheff_description')}</p>
        </div>
      </div>
    </Element>
  );
}

export default Home;
