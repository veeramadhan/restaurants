import React, { useEffect } from "react";
import "./Access.css";
import { Element } from "react-scroll";
import { useTranslation } from 'react-i18next';
import logosushi from "../../Assets/logosushi.png";
import facebook from "../../Assets/facebook.png";
import twitter from "../../Assets/twitter.png";
import youtube from "../../Assets/youtube.png";
import instagram from "../../Assets/instagram.png";
import AOS from 'aos';

const Access = () => {
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
    <Element name="access">
      <div className="accessMain">
        <div className="container row gap-5">
          <div className="col-lg-4 col-md-6 leftAddBox" data-aos="fade-right" data-aos-duration="1000">
            <h4 className="head">{t('access.address.title')}</h4>
            <p className="addpara">{t('access.address.detail')}</p>
            <h4 className="head">{t('access.access.title')}</h4>
            <p className="addpara">{t('access.access.detail')}</p>
            <h4 className="head">{t('access.enquiry.title')}</h4>
            <p className="addpara">{t('access.enquiry.detail')}</p>
          </div>

          <div className="col-lg-5 col-md-6 rightMap" data-aos="fade-left" data-aos-duration="1000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414121.1937495793!2d139.6007830905766!3d35.675900555401115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf43aa780d9%3A0x2bce3137d5d0735a!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1689177489161!5m2!1sen!2sus"
              width="650"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="map rightMapss"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container-fluid footer">
        <div>
          <img src={logosushi} width={"150px"} height={"150px"} alt="Logo" />
        </div>
        <h1 className="title titlehead">{t('access.footer.title')}</h1>
        <div className="rightscontent">
          <p>{t('access.footer.copyright')}
            <br />
            <span>{t('access.footer.rights')}</span>
          </p>
        </div>
        <div className="allicon d-flex">
          <ul>
            <li><img src={facebook} className="iconfooter" alt="Facebook" /></li>
          </ul>
          <ul>
            <li><img src={youtube} className="iconfooter" alt="YouTube" /></li>
          </ul>
          <ul>
            <li><img src={twitter} className="iconfooter" alt="Twitter" /></li>
          </ul>
          <ul>
            <li><img src={instagram} className="iconfooter" alt="Instagram" /></li>
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default Access;
