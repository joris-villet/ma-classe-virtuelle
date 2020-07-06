/* eslint-disable import/no-unresolved */
import {
  NOT_SAME_PASSWWORD,
  SAME_PASSWORD,
  EMAIL_EXISTS,
  EMAIL_DOES_NOT_EXIST,
  ERROR_LOGIN,
  ERROR_FORM_CLASS,
  ERROR_FORM_STUDENT,
} from 'src/actions/error';

import { LOGIN } from 'src/actions/user';
import { LOGOUT } from 'src/actions/user';

export const initialState = {
  errorNotSamePassword: false,
  errorEmailExists: false,
  errorBadLogin: false,
  errorLogin: false,
  errorFormClass: false,
  errorFormStudent: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NOT_SAME_PASSWWORD:
      return {
        ...state,
        errorNotSamePassword: true,
      };
    case SAME_PASSWORD:
      return {
        ...state,
        errorNotSamePassword: false,
      };
    case EMAIL_EXISTS:
      return {
        ...state,
        errorEmailExists: true,
      };
    case EMAIL_DOES_NOT_EXIST:
      return {
        ...state,
        errorEmailExists: false,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        errorLogin: true,
      };
    case ERROR_FORM_CLASS:
      return {
        ...state,
        errorFormClass: true,
      };
    case ERROR_FORM_STUDENT:
      return {
        ...state,
        errorFormStudent: true,
      };
    case LOGIN:
      return {
        ...state,
        errorNotSamePassword: false,
        errorEmailExists: false,
        errorBadLogin: false,
        errorLogin: false,
        errorFormClass: false,
        errorFormStudent: false,
      };
    case LOGOUT:
      return {
        ...state,
        errorFormClass: false,
        errorFormStudent: false,
        errorLogin: false,
      };
    default:
      return state;
  }
};

export default reducer;
