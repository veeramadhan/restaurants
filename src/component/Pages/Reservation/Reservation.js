import React, { useEffect}from "react";
import "./Reservation.css"
import { Element } from "react-scroll"
import AOS from 'aos';
import { useTranslation } from 'react-i18next';


const Reservation = () => {

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
    <Element name='reservation' className='reservationMain'>
     <div>
        <h1 className='titleRes'>{t("reservation.title")}</h1>
     </div>

     <div className='queryContent container' data-aos="zoom-in" data-aos-duration="1000">
        <div>
            <h5 className="mbtext">{t("reservation.query")}</h5>
            <p className='paraNum'>03-1234-5678</p>
        </div>
        <div className='internetRes'>
            <h1 className="mbtext">{t("reservation.booking")}</h1>
        </div>
     </div>
    </Element>
  )
}

export default Reservation