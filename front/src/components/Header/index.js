import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';

// import img for logo
import Img from '../../assets/images/bg.png';

const Header = ({
  logged,
  handleLogout,
  toggleModals,
  studentOrTeacher,
}) => (
  <section className="curved">

    <header className="header">
      <div className="header-container-contact">
        <Link
          to="/contact"
          className="header-container-link"
        >
          CONTACT
        </Link>
      </div>
      <div className="header-logo">
        <a href="/"> <img className="header-logo-img" src={Img} alt="logo" /> </a>
    </div>
      <div className="header-container">
        {!logged && (
          <button
            type="button"
            onClick={() => {
              studentOrTeacher('teacher');
              toggleModals('inscriptionModal');
            }}
            className="header-container-link"
          >
            Inscription
          </button>
        )}
        {logged && (
        <Link
          to="/"
          onClick={() => {
            handleLogout();
          }}
          className="header-container-link"
        >
          DECONNEXION
        </Link>
        )}
      </div>
    </header>
  </section>
);

Header.propTypes = {
  logged: PropTypes.bool.isRequired,
  studentOrTeacher: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  toggleModals: PropTypes.func.isRequired,
};

export default Header;
