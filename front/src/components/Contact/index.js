import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';
// import { Link } from 'react-router-dom';

// import img for logo
import Img from '../../assets/images/contact.png';
import ImgLogo from '../../assets/images/bg.png';

const Contact = ({
}) => (
  <header>
    <div className="header-logo-contact">
      <a href="/"> <img className="header-logo-img" src={ImgLogo} alt="logo" /> </a>
    </div>
    <div className="contact-img">
      <img className="img-contact" src={Img} alt="contact" />
    </div>
  </header>
);

// Contact.propTypes = {
// };

export default Contact;
