/* eslint-disable import/no-unresolved */

import {
  CHANGE_MODAL,
} from 'src/actions/modals';

export const initialState = {
  inscriptionModal: false,
  connectModal: false,
  modalAddCard: false,
  addClassModal: false,
  modalOnClickCardTeacher: false,
  modalOnClickCardStudent: false,
  addStudent: false,
  showClassInfo: false,
  addLabel: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MODAL:
      return {
        ...state,
        [action.name]: !state[action.name],
      };

    default:
      return state;
  }
};

export default reducer;
