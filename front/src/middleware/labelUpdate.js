/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import axios from 'axios';

import {
  finishLoading,
  login,
  LOGIN,
} from 'src/actions/user';

import { SUBMIT_LABEL_UPDATE } from 'src/actions/labelUpdate';
import { toggleModals } from 'src/actions/modals';

const labelUpdate = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LABEL_UPDATE: {
      console.log('je suis dnas le middleware du SUBMIT_LABEL_UPDATE');
      const state = store.getState();
      // http://ec2-3-88-178-185.compute-1.amazonaws.com:7844
      axios.put(`http://ec2-3-88-178-185.compute-1.amazonaws.com:7844/label`, {
        // list_id: state.user.infoCard.list_id,
        // class_id: state.user.infoCard.class_id,
        // content: state.user.infoCard.content,
        // title: state.user.infoCard.title,
        // position: state.cardUpdate.position,
        // label_id: 1,
      }, {
        withCredentials: true,
      })
        .then(() => {
          console.log('response dans le then de labelUpdate , response.data');
          store.dispatch(selectLabel());
          store.dispatch(toggleModals('addLabel'));
        })
        .catch((error) => {
          console.log('je suis dans le catch du middleware labelUpdate', error);
        })
        .finally(() => {
          store.dispatch(finishLoading());
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default labelUpdate;
