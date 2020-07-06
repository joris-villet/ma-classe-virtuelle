/* eslint-disable import/no-unresolved */
import {
  CHANGE_VALUE_STUDENT_FORM,
} from 'src/actions/studentForm';

export const initialState = {
  firstName: '',
  lastName: '',
  birthDate: '',
  email: '',
  password: '',
  repeatPassword: '',
  grade: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_STUDENT_FORM:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
