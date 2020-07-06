import React from 'react';

import PropTypes from 'prop-types';
import './styles.scss';

const ButtonClassInfo = ({ classOfStudent }) => (
  <div className="button-class-info-container">
    <button
      className="button-class-info"
      onClick={() => {
        console.log('Je veux montrer les infos de la classe');
      }}
      >
      {classOfStudent.toUpperCase()}
    </button>
  </div>
);

ButtonClassInfo.propTypes = {
  classOfStudent: PropTypes.string.isRequired,
};

export default ButtonClassInfo;
