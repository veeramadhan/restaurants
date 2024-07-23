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
      offset: 200, // offset (in px) from the original trigger point
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
    });

    // Refresh AOS on scroll
    window.addEventListener('scroll', AOS.refresh);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);

  return (
    <Element name="home" className="homeMain">
      <div className="container-fluid d-flex align-items-center justify-content-center mt-5 gap-5">
        <div className="col-7 leftContent" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="title">{t('home.nigiri_sushi')}</h1>
          <p className="ptxt">{t('home.nigiri_description')}</p>
        </div>
        <div className="col-3">
          <img src={nigiraa} className="nigirisushi col-12" alt={t('home.nigiri_sushi')} />
        </div>
      </div>

      <div className="container-fluid d-flex align-items-center justify-content-center mt-5 gap-5">
        <div className="col-3">
          <img src={mahi} className="nigirisushi col-12" alt={t('home.maki_rolls')} />
        </div>
        <div className="col-7 leftContent" data-aos="fade-left" data-aos-duration="1000">
          <h1 className="title">{t('home.maki_rolls')}</h1>
          <p className="ptxt">{t('home.maki_description')}</p>
        </div>
      </div>

      <div className="container-fluid d-flex align-items-center justify-content-center mt-5 gap-5">
        <div className="col-7 leftContent" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="title">{t('home.sashimi_platter')}</h1>
          <p className="ptxt">{t('home.sashimi_description')}</p>
        </div>
        <div className="col-3">
          <img src={sashmi} className="nigirisushi col-12" alt={t('home.sashimi_platter')} />
        </div>
      </div>

      <div className="container-fluid cheffMain mt-5">
        <img src={cheff} className="cheff col-12" alt={t('home.chef')} />
        <div className="cheffContent col-4" data-aos="zoom-in" data-aos-duration="1000">
          <p>{t('home.cheff_description')}</p>
        </div>
      </div>
    </Element>
  )
}

export default Home;
