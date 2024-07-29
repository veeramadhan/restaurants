import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useTranslation } from 'react-i18next';
import logosushi from "../../Assets/logosushi.png";
import up from "../../Assets/up.png";
import "./Nav.css";

const Nav = () => {
  const { t, i18n } = useTranslation();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="NavMain">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid gap-3">
          <button className="buttonLan" onClick={() => changeLanguage('en')}>
            <h2>{t('nav.english')}</h2>
          </button>
          <span className="slash">/</span>
          <button className="buttonLan" onClick={() => changeLanguage('ja')}>
            <h2>{t('nav.japanese')}</h2>
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 gap-5 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="home"
                  className="nav-link active"
                  smooth={true}
                  duration={250}
                >
                  <h2>{t('nav.home')}</h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="menu"
                  className="nav-link active"
                  smooth={true}
                  duration={250}
                >
                  <h2>{t('nav.menu')}</h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="access"
                  className="nav-link active"
                  smooth={true}
                  duration={250}
                >
                  <h2>{t('nav.access')}</h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="atmosphere"
                  className="nav-link active"
                  smooth={true}
                  duration={250}
                >
                  <h2>{t('nav.atmosphere')}</h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="reservation"
                  className="nav-link active"
                  smooth={true}
                  duration={250}
                >
                  <h2 className="resBg">{t('nav.reservation')}</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mainContent">
        <p>
          <span className="highlighttxt">S</span>ushi Symphony
        </p>
      </div>
      <div className="subContent">
        <p>{t('nav.slogan')}</p>
      </div>
      <div>
        <img src={logosushi} className="logosushi" alt="Logo" />
      </div>

      <button
        className="scrollTop"
        onClick={scrollToTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        <img src={up} height={"60px"} width={"60px"} />
      </button>
    </div>
  );
};

export default Nav;
