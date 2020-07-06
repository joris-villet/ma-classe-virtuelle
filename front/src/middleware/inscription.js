/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import axios from 'axios';

import { SUBMIT_INSCRIPTION } from 'src/actions/inscription';
import { changeValue } from 'src/actions/user';
import { toggleModals } from 'src/actions/modals';
import { errorNotSamePassword, samePassword, errorEmailExists, emailDoesNotExist } from 'src/actions/error';
import { checkSamePassword } from 'src/selectors';

const inscription = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_INSCRIPTION: {
      console.log('inscription middleware');
      const state = store.getState();
      if (checkSamePassword(state.inscription.password, state.inscription.repeatPassword) === false) {
        store.dispatch(errorNotSamePassword());
        break;
      }
      axios.post('http://ec2-3-88-178-185.compute-1.amazonaws.com:7844/signup', {
        firstName: state.inscription.firstName,
        lastName: state.inscription.lastName,
        birthDate: state.inscription.birthDate,
        email: state.inscription.email,
        password: state.inscription.password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log('response dans le then middleware inscription', response.data);
          // If email already exists, bool to true for className in component which adds red div message
          if (response.data === 'un compte existe deja avec cette Email') {
            store.dispatch(errorEmailExists());
            return;
          }
          store.dispatch(toggleModals('inscriptionModal'));
          // If email doesn't exist, emailDoesNotExist stays false => continues
          store.dispatch(emailDoesNotExist());
          // If same passwords => sends false bool for errorNotSamePassword
          store.dispatch(samePassword());
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          // When inscription finished => values for next modal login
          store.dispatch(changeValue('email', state.inscription.email));
          store.dispatch(changeValue('password', state.inscription.password));
          store.dispatch(toggleModals('connectModal'));
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default inscription;
