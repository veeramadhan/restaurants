import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Element } from "react-scroll";
import "./Atmosphere.css";
import btm from "../../Assets/btm.jpg";
import top from "../../Assets/top.jpg";
import down from "../../Assets/down.jpg";
import AOS from 'aos';

const Atmosphere = () => {
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
    <Element name="atmosphere" className="atmoshpereMain">
      <div className="container-fluid row" data-aos="fade-down-right" data-aos-duration="1000">
        <div className="col-6  collegue">
          <div className="btmPic">
            <img src={btm} alt={t('atmosphere.title')} />
          </div>
          <div className="topPic">
            <img src={top} alt={t('atmosphere.title')} />
          </div>
          <div className="downPic">
            <img src={down} alt={t('atmosphere.title')} />
          </div>
        </div>

        <div className="col-5 rightparaContent" data-aos="fade-down-left" data-aos-duration="1000">
          <h1 style={{color:"red", textAlign:"center", fontSize:"60px"}}>{t('atmosphere.title')}</h1>
          <p>{t('atmosphere.description')}</p>
        </div>
      </div>
    </Element>
  );
};

export default Atmosphere;
