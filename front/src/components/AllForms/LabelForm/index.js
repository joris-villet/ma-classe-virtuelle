/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const LabelForm = ({
  allLabel,
  chooseLabel,
}) => {
  return (

    <div className="container-label-form">
      <label htmlFor="text" className="label-text">
        Choisissez Votre Label
        <select
          className="select-style"
          onChange={(event) => {
            chooseLabel(event.target.value);
          }}
        >
          {allLabel.map((label) => (
            // i use label_id to select value because bdd needs id number for axios request
            <option className="option-style" key={label.id} value={label.id}>{label.title}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

LabelForm.propTypes = {
  allLabel: PropTypes.array.isRequired,
  chooseLabel: PropTypes.func.isRequired,
};

export default LabelForm;

// labels.map
// save all value and send middle ware for update labelin card
