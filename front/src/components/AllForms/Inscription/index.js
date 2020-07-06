/* eslint-disable import/no-unresolved */

import React from 'react';
import Field from 'src/containers/AllForms/Field';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

import './styles.scss';

const Inscription = ({
  lastName,
  firstName,
  birthDate,
  email,
  password,
  repeatPassword,
  errorNotSamePassword,
  submitInscription,
  changeValueInscription,
  toggleModals,
  errorEmailExists,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitInscription();
  };
  return (
    <div className="inscription">
      <div className="inscription-container-button">
        <h3 className="inscription-title">Inscription Professeur</h3>
        <Button
          icon
          className="inscription-form-cross"
          onClick={() => {
            toggleModals('inscriptionModal');
          }}
        >
          {/* exit cross design */}
          <Icon name="remove" />
        </Button>
      </div>
      <form autoComplete="off" className="inscription-form-element" onSubmit={handleSubmit}>
        <Field
          fieldClassName="field-input"
          minLengthWord="2"
          maxLengthWord="30"
          name="firstName"
          maxLength="3"
          placeholder="Prenom"
          onChange={(event) => {
            changeValueInscription('firstName', event);
          }}
          value={firstName}
        />
        <Field
          fieldClassName="field-input"
          minLengthWord="2"
          maxLengthWord="30"
          name="lastName"
          id="last_name"
          placeholder="Nom"
          onChange={(event) => {
            changeValueInscription('lastName', event);
          }}
          value={lastName}
        />
        <Field
          fieldClassName="field-input"
          placeholder="Date de naissance"
          type="date"
          value={birthDate}
          name="date"
          onChange={(event) => {
            changeValueInscription('birthDate', event);
          }}
        />
        <Field
          fieldClassName="field-input"
          minLengthWord="5"
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          onChange={(event) => {
            changeValueInscription('email', event);
          }}
          value={email}
        />
        <Field
          fieldClassName={errorNotSamePassword === true ? 'field-input errorForm' : 'field-input'}
          minLengthWord="8"
          maxLengthWord="30"
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            changeValueInscription('password', event);
          }}
          value={password}
        />
        <Field
          fieldClassName={errorNotSamePassword === true ? 'field-input errorForm' : 'field-input'}
          minLengthWord="8"
          maxLengthWord="30"
          name="repeatPassword"
          type="password"
          placeholder="Confirmer le mot de passe"
          onChange={(event) => {
            changeValueInscription('repeatPassword', event);
          }}
          value={repeatPassword}
        />
        {errorEmailExists && <div className="errorForm">Un compte existe déjà avec cet email</div>}
        {errorNotSamePassword && <div className="errorForm">Les mots de passe ne sont pas identiques</div>}
        <button
          type="submit"
          className="inscription-form-button"
        >
          ENVOYER
        </button>
      </form>
    </div>
  );
};

Inscription.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired,
  errorNotSamePassword: PropTypes.bool.isRequired,
  submitInscription: PropTypes.func.isRequired,
  changeValueInscription: PropTypes.func.isRequired,
  toggleModals: PropTypes.func.isRequired,
  errorEmailExists: PropTypes.bool.isRequired,
};
// == Export
export default Inscription;
