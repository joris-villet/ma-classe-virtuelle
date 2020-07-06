/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ClassChange = ({
  allClassId,
  chooseClass,
  chooseClassValue,
  allClassName,
  getCountStudent,
}) => {
  return (
    <form className="label-form">
      <label className="label-text" htmlFor="text">
        Choisissez Votre Classe
        <select
          className="select-style"
          onChange={(event) => {
            console.log(event.target.value);
            chooseClass(event.target.value);
            getCountStudent();
          }}
        >
          {allClassName.map((id, index) => (
            // i use label_id to select value because bdd needs id number for axios request
            <option className="option-style" key={`${allClassName}${index}`} value={index}>{allClassName[index]}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

ClassChange.propTypes = {
  allClassId: PropTypes.array.isRequired,
  getCountStudent: PropTypes.func.isRequired,
  allClassName: PropTypes.array.isRequired,
  chooseClass: PropTypes.func.isRequired,
  chooseClassValue: PropTypes.number.isRequired,
};

export default ClassChange;

// labels.map
// save all value and send middle ware for update labelin card
