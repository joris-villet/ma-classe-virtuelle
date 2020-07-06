/* eslint-disable import/no-unresolved */

import React from 'react';
import Field from 'src/containers/AllForms/Field';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

import './styles.scss';

const ClassForm = ({
  code,
  changeValueClassForm,
  submitClassForm,
  toggleModals,
  errorFormClass,
}) => (
  <div className="create-class">
    <div className="create-class-container-button">
      <h3 className="create-class-title">Creation de la Classe</h3>
      <Button
        icon
        className="create-class-form-cross"
        onClick={() => {
          toggleModals('addClassModal');
        }}
      >
        {/* exit cross design */}
        <Icon name="remove" />
      </Button>
    </div>
    <form
      autoComplete="off"
      className="create-class-form-element"
      onSubmit={(event) => {
        console.log('coucou je suis suis dans le submit');
        event.preventDefault();
        submitClassForm();
      }}
    >
      <Field
        fieldClassName="field-input"
        name="code"
        placeholder="Nom de votre classe"
        minLengthWord="2"
        onChange={(event) => {
          changeValueClassForm('code', event);
        }}
        value={code}
      />
      {errorFormClass && <div className="errorForm">La classe existe déjà</div> }
      <button
        type="submit"
        className="inscription-form-button"
      >
        ENVOYER
      </button>
    </form>
  </div>
);

ClassForm.propTypes = {
  code: PropTypes.string.isRequired,
  submitClassForm: PropTypes.func.isRequired,
  changeValueClassForm: PropTypes.func.isRequired,
  toggleModals: PropTypes.func.isRequired,
  errorFormClass: PropTypes.bool.isRequired,
};
// == Export
export default ClassForm;
