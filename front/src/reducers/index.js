import { combineReducers } from 'redux';

import user from './user';
import modal from './modal';
import inscription from './inscription';
import error from './error';
import classForm from './classForm';
import cardForm from './cardForm';
import studentForm from './studentForm';
import labelForm from './labelForm';


export default combineReducers({
  modal,
  user,
  inscription,
  error,
  classForm,
  cardForm,
  studentForm,
  labelForm,
});
