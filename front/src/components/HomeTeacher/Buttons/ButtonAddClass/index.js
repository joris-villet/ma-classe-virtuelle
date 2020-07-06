/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ButtonAddClass = ({ toggleModals }) => (

  <div className="button-add-class-container">
    <button
      className="button-add-class"
      onClick={() => {
        toggleModals('addClassModal');
      }}
    >
      AJOUTER UNE CLASSE
    </button>
  </div>
);

ButtonAddClass.propTypes = {
  toggleModals: PropTypes.func.isRequired,
};

export default ButtonAddClass;
