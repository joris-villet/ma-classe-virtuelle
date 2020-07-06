import React from 'react';
import ClassChange from 'src/containers/AllForms/ClassChange';
import PropTypes from 'prop-types';

import './styles.scss';

const ButtonClassInfo = ({ nameOfClass, studentsNumberinClass }) => {
  return (
    <div className="button-class-info-container">
      <button
        type="button"
        className="button-class-info"
        onClick={() => {
          console.log('Je veux montrer les infos de la classe');
        }}
      >
        {`${nameOfClass.toUpperCase()} - ${studentsNumberinClass} ELEVE(S)`}
        <ClassChange />
      </button>
    </div>
  );
};

ButtonClassInfo.propTypes = {
  nameOfClass: PropTypes.string,
  studentsNumberinClass: PropTypes.string.isRequired,
};

ButtonClassInfo.defaultProps = {
  nameOfClass: 'VEuillez creer une classe',
};

export default ButtonClassInfo;
