/* eslint-disable import/no-unresolved */

import React from 'react';
import Field from 'src/containers/AllForms/Field';
import LabelForm from 'src/containers/AllForms/LabelForm';
import PropTypes from 'prop-types';
// import { Button, Icon } from 'semantic-ui-react';

import './styles.scss';

const CardUpdate = ({
  changeValue,
  submitCardUpdate,
  infoTitleCard,
  infoContentCard,
  infoVideoCard,
  deleteCard,
  infoLinkCard,
  // toggleModals,
}) => {
  console.log('infoLinkCard', infoLinkCard);
  return (
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
          event.preventDefault();
          submitCardUpdate();
        }}
      >
        <LabelForm />
        <Field
          fieldClassName="field-input"
          placeholder="Titre de votre carte"
          name="title"
          onChange={(event) => {
            changeValue('infoTitleCard', event);
          }}
          value={infoTitleCard}
        />
        <textarea
          rows="20"
          cols="20"
          placeholder="Contenu de votre carte"
          name="content"
          onChange={(event) => {
            changeValue('infoContentCard', event.target.value);
          }}
          value={infoContentCard}
        />
        <Field
          type="url"
          fieldClassName="field-input"
          placeholder="Une video ? C'est ici !"
          name="video"
          onChange={(event) => {
            changeValue('infoVideoCard', event);
          }}
          value={infoVideoCard}
        />
        <Field
          fieldClassName="field-input"
          type="url"
          placeholder="Un lien ? C'est ici !"
          name="link"
          onChange={(event) => {
            changeValue('infoLinkCard', event);
          }}
          value={infoLinkCard}
        />
        <div className="cardupdate-container-button">
          <button
            type="submit"
            className="inscription-form-button"
          >
            AJOUTER
          </button>
          <button
            className="create-card-form-element inscription-form-button"
            onClick={(event) => {
              console.log('coucou je suis suis dans le submit du cardUpdate pour delete');
              event.preventDefault();
              deleteCard();
            }}
            type="submit"
          >
            SUPRIMER
          </button>
        </div>
      </form>
    </div>
  );
};

CardUpdate.propTypes = {
  infoTitleCard: PropTypes.string.isRequired,
  infoContentCard: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  submitCardUpdate: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

// == Export
export default CardUpdate;
