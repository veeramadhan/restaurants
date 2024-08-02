import React, { useEffect } from "react";
import { Element } from "react-scroll";
import "./Menu.css";
import dishes from "../../Assets/dishes.jpg";
import drinks from "../../Assets/drinks.jpg";
import { FaStar } from "react-icons/fa";
import prof from "../../Assets/prof.jpg";
import prof1 from "../../Assets/prof1.jpg";
import prof2 from "../../Assets/prof2.jpg";
import AOS from "aos";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease",
      once: false,
      anchorPlacement: "top-center",
    });

    window.addEventListener("scroll", AOS.refresh);

    return () => {
      window.removeEventListener("scroll", AOS.refresh);
    };
  }, []);

  const reviews = t("menu.reviews.customer", { returnObjects: true });

  const profileImages = {
    prof: prof,
    prof1: prof1,
    prof2: prof2,
  };

  return (
    <Element name="menu">
      <div className="menuMain">
        <div className="titleMenu">
          <h1>{t("menu.title")}</h1>
        </div>
        <div className="menuContainer row">
          <div
            className="menuItem col-lg-5 col-md-10"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="imageContainer">
              <img src={dishes} className="nigiri" alt="Dishes" />
              <div className="imageLabel">{t("menu.dishes.title")}</div>
            </div>
          </div>

          <div
            className="menuItem col-lg-5 col-md-7"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="imageContainer">
              <img src={drinks} className="nigiri" alt="Drinks" />
              <div className="imageLabel">{t("menu.drinks.title")}</div>
            </div>
          </div>
        </div>

        <div className="menuContainer row">
          <div
            className="menuItem1 col-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="menuContent">
              <ul>
                {t("menu.dishes.items", { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index}>
                      <span className="itemName">{item.name}</span>
                      <span className="itemLine"></span>
                      <span className="itemPrice">{item.price}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div
            className="menuItem2 col-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="menuContent">
              <ul>
                {t("menu.drinks.items", { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index}>
                      <span className="itemName">{item.name}</span>
                      <span className="itemLine"></span>
                      <span className="itemPrice">{item.price}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="ratingbg">
        <div className="boxrating">
          <h1 className="sectionTitle">{t("menu.reviews.title")}</h1>
          <div
            className="reviewsContainer"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            {reviews.slice(0, 3).map((review, index) => (
              <div key={index} className="rating">
                <img
                  src={profileImages[review.profile]}
                  className="profile"
                  alt={review.titleName}
                />
                <div className="stars">
                  {Array(review.stars)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <h2 className="titleName">{t(review.titleName)}</h2>
                <p className="contentReview">{t(review.contentReview)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Menu;
