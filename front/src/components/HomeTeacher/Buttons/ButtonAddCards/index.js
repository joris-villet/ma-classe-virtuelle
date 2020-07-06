/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ButtonAddCards = ({ toggleModals, listId, listIdForAddCard, classId, indexList }) => {
  // console.log('listid', listId)
  return (
    <div className="button-container">
      <button
        className="button-container-add-card"
        onClick={() => {
          listIdForAddCard(indexList, listId, classId);
          toggleModals('modalAddCard');
        }}
      >
        AJOUTER UNE CARTE
      </button>
    </div>
  );
};

ButtonAddCards.propTypes = {
  toggleModals: PropTypes.func.isRequired,
  indexList: PropTypes.number.isRequired,
  listId: PropTypes.number.isRequired,
  classId: PropTypes.number.isRequired,
  listIdForAddCard: PropTypes.func.isRequired,
};

export default ButtonAddCards;
