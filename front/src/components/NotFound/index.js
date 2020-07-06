/* eslint-disable react/self-closing-comp */
import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

const NotFound = () => (
  <>
    <div className="container">
      <a href="/" className="error">
        <p className="p">4</p>
        <span className="dracula">
          <div className="con">
            <div className="hair"></div>
            <div className="hair-r"></div>
            <div className="head"></div>
            <div className="eye"></div>
            <div className="eye eye-r"></div>
            <div className="mouth"></div>
           
          </div>
        </span>
        <p className="p">4</p>
        <div className="page-ms">
          <p className="page-msg"> Oops, la page que tu cherche n'est pas disponible !!!</p>
        </div>
      </a>
    </div>

  </>
);

export default NotFound;
