/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Field from 'src/containers/AllForms/Field';

import './styles.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  toggleModals,
  errorLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      <div className="login-form-container-button">
        <h3 className="login-form-title">Connecte toi</h3>
        <Button
          icon
          className="login-form-cross"
          onClick={() => {
            toggleModals('connectModal');
          }}
        >
          {/* exit cross design */}
          <Icon name="remove" />
        </Button>
      </div>
      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>

        <Field
          fieldClassName="field-input"
          name="email"
          placeholder="Adresse Email"
          onChange={changeField}
          value={email}
        />
        <Field
          fieldClassName="field-input"
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        {errorLogin && <div className="errorForm">Email ou mot de passe incorrect</div>}
        <button
          type="submit"
          className="login-form-button"
        >
          ENVOYER
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  toggleModals: PropTypes.func.isRequired,
  errorLogin: PropTypes.bool.isRequired,
};

export default LoginForm;
