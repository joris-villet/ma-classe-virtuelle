/* eslint-disable import/no-unresolved */
import {
  CHANGE_VALUE_CLASS_FORM,
} from 'src/actions/classForm';

export const initialState = {
  code: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_CLASS_FORM:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
