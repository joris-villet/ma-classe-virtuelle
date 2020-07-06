/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import axios from 'axios';

import { SUBMIT_STUDENT_FORM } from 'src/actions/studentForm';
import { getCountStudent } from 'src/actions/user';
import { errorFormStudent } from 'src/actions/error';
import { toggleModals } from 'src/actions/modals';

const studentForm = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SUBMIT_STUDENT_FORM: {
      console.log('creation d un élève');
      console.log('state.studentForm.lastName:', state.studentForm.lastName);
      console.log('state.studentForm.birthDate:', state.studentForm.birthDate);
      console.log('state.studentForm.firstName:', state.studentForm.firstName);
      console.log('state.studentForm.email:', state.studentForm.email);
      console.log('state.user.classId', state.user.allClassId[state.user.chooseClass]);
      axios.post('http://ec2-3-88-178-185.compute-1.amazonaws.com:7844/student', {
        firstName: state.studentForm.firstName,
        lastName: state.studentForm.lastName,
        email: state.studentForm.email,
        classId: state.user.allClassId[state.user.chooseClass],
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log('response dans le then', response.data);
          store.dispatch(toggleModals('addStudent'));
          store.dispatch(getCountStudent());
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(errorFormStudent());
        })
        .finally(() => {

        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default studentForm;
