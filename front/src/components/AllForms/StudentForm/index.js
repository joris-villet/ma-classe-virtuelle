/* eslint-disable import/no-unresolved */

import React from 'react';
import Field from 'src/containers/AllForms/Field';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

import './styles.scss';

const StudentForm = ({
  firstName,
  lastName,
  email,
  changeValueStudentForm,
  submitStudentForm,
  toggleModals,
  errorFormStudent,
}) => (
  <div className="create-class">
    <div className="create-class-container-button">
      <h3 className="create-class-title">Creation de l'élève</h3>
      <Button
        icon
        className="create-class-form-cross"
        onClick={() => {
          toggleModals('addStudent');
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
        submitStudentForm();
      }}
    >
      <Field
        fieldClassName="field-input"
        name="firstName"
        placeholder="Prenom"
        minLengthWord="2"
        maxLengthWord="30"
        onChange={(event) => {
          changeValueStudentForm('firstName', event);
        }}
        value={firstName}
      />
      <Field
        fieldClassName="field-input"
        name="lastName"
        placeholder="Nom"
        minLengthWord="2"
        maxLengthWord="30"
        onChange={(event) => {
          changeValueStudentForm('lastName', event);
        }}
        value={lastName}
      />
      <Field
        fieldClassName="field-input"
        minLengthWord="5"
        placeholder="Email"
        name="email"
        id="email"
        type="email"
        onChange={(event) => {
          changeValueStudentForm('email', event);
        }}
        value={email}
      />

      {errorFormStudent && <div className="errorForm">L'élève existe déjà</div> }
      <button
        type="submit"
        className="inscription-form-button"
      >
        ENVOYER
      </button>
    </form>
  </div>
);

StudentForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  submitStudentForm: PropTypes.func.isRequired,
  changeValueStudentForm: PropTypes.func.isRequired,
  toggleModals: PropTypes.func.isRequired,
  errorFormStudent: PropTypes.bool.isRequired,
};
// == Export
export default StudentForm;
