/* eslint-disable import/no-unresolved */

import React from 'react';
import Field from 'src/containers/AllForms/Field';
import LabelForm from 'src/containers/AllForms/LabelForm';
import PropTypes from 'prop-types';
// import { Button, Icon } from 'semantic-ui-react';

import './styles.scss';

const CardForm = ({
  content,
  title,
  url,
  video,
  changeValueCardForm,
  submitCardForm,
  // toggleModals,
}) => (
  <div className="create-card">
    <div className="create-card-container-button">
      <h3 className="create-card-title">Contenu de la carte</h3>
      {/* <Button
        // icon
        className="create-card-form-cross"
        onClick={() => {
          toggleModals('addCardModal');
        }}
      > */}
      {/* exit cross design */}
      {/* <Icon name="remove" /> */}
      {/* </Button> */}
    </div>
    <form
      autoComplete="off"
      className="create-card-form-element"
      onSubmit={(event) => {
        console.log('coucou je suis suis dans le submit du cardForm');
        event.preventDefault();
        submitCardForm();
      }}
    >
      <LabelForm />
      <Field
        fieldClassName="field-input"
        placeholder="Titre de votre carte"
        name="title"
        onChange={(event) => {
          changeValueCardForm('title', event);
        }}
        value={title}
      />
      <textarea
        rows="20"
        cols="20"
        type="text"
        placeholder="Contenu de votre carte"
        name="content"
        onChange={(event) => {
          changeValueCardForm('content', event.target.value);
        }}
        value={content}
      />
      <Field
        type="url"
        fieldClassName="field-input"
        placeholder="Une video ? C'est ici !"
        name="video"
        onChange={(event) => {
          changeValueCardForm('video', event);
        }}
        value={video}
      />
      <Field
        type="url"
        fieldClassName="field-input"
        placeholder="Un lien ? C'est ici !"
        name="url"
        onChange={(event) => {
          changeValueCardForm('url', event);
        }}
        value={url}
      />

      <button
        type="submit"
        className="inscription-form-button"
      >
        AJOUTER
      </button>
    </form>
  </div>
);

CardForm.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  submitCardForm: PropTypes.func.isRequired,
  changeValueCardForm: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  // toggleModals: PropTypes.func.isRequired,
};
// == Export
export default CardForm;
