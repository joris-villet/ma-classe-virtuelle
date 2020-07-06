/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import axios from 'axios';

import { SUBMIT_CLASS_FORM, idClassAfterCreate } from 'src/actions/classForm';
import { getCountStudent } from 'src/actions/user';
import { errorFormClass } from 'src/actions/error';
import { toggleModals } from 'src/actions/modals';

const classForm = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CLASS_FORM: {
      console.log('creation d une classe');
      const state = store.getState();
      console.log(state.classForm.code);
      console.log(state.user.id);

      axios.post('http://ec2-3-88-178-185.compute-1.amazonaws.com:7844/class', {
        code: state.classForm.code,
        teacherid: state.user.id,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log('response.data de classForm', response.data);

          const listId = response.data.filter((element) => element);
          const classID = listId.map((element) => element.class_id);
          const uniqueClassId = new Set(classID);
          const allClassId = [...uniqueClassId];


          const className = listId.map((element) => element.class_title);
          const uniqueClassName = new Set(className);
          const allClassName = [...uniqueClassName];

          const lastIndexClassId = allClassId.length - 1;
          // const newClassIdInAllClass = [...state.user.allClassId, lastList().class_id];
          store.dispatch(idClassAfterCreate(response.data, allClassId, lastIndexClassId, allClassName));
          store.dispatch(toggleModals('addClassModal'));
        })
        .catch((error) => {
          console.error(error);
          console.log('classForm catch');
          store.dispatch(errorFormClass());
        })
        .finally(() => {
          store.dispatch(getCountStudent());
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default classForm;
