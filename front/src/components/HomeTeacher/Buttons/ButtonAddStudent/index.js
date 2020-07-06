import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ButtonAddStudent = ({ toggleModals }) => (
  <div className="button-add-student-container">
    <button
      className="button-add-student"
      onClick={() => {
        toggleModals('addStudent');
      }}
    >
      AJOUTER UN ELEVE
    </button>
  </div>
);

ButtonAddStudent.propTypes = {
  toggleModals: PropTypes.func.isRequired,
};

export default ButtonAddStudent;
