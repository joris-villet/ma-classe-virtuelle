/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ButtonAddLabel = ({ toggleModals }) => (
  
  <div className="button-add-class-container">
    <Button
      className="button-add-class"
      onClick={() => {
        toggleModals('addLabel');
      }}
    >
      AJOUTER UNE ETIQUETTE
    </Button>
  </div>
);

ButtonAddLabel.propTypes = {
  toggleModals: PropTypes.func.isRequired,
};

export default ButtonAddLabel;
