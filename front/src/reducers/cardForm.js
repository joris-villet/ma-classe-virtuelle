/* eslint-disable import/no-unresolved */
import {
  CHANGE_VALUE_CARD_FORM,
  LIST_ID_FOR_ADD_CARD,
} from 'src/actions/cardForm';
import {
  ADD_CARD,
} from 'src/actions/user';

export const initialState = {
  content: '',
  title: '',
  url: '',
  link: '',
  listIdForAddCard: '',
  classIdForAddCard: '',
  infoLinkCard: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_CARD_FORM:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LIST_ID_FOR_ADD_CARD:
      return {
        ...state,
        listIdForAddCard: action.listId,
        classIdForAddCard: action.classId,
        indexList: action.indexList,

      };
    case ADD_CARD:
      return {
        ...state,
        content: '',
        title: '',
        link: '',
        video: '',
      };
    default:
      return state;
  }
};

export default reducer;
