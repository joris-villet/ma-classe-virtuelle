/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import axios from 'axios';

import {
  finishLoading,
  addCard,
} from 'src/actions/user';

import { SUBMIT_CARD_FORM } from 'src/actions/cardForm';
import { toggleModals } from 'src/actions/modals';

const cardForm = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CARD_FORM: {
      console.log('creation d une card form');
      const state = store.getState();
      console.log('state.labelForm.chooseLabel:', state.cardForm.classIdForAddCard);
      axios.post('http://ec2-3-88-178-185.compute-1.amazonaws.com:7844/card', {
        list_id: state.cardForm.listIdForAddCard,
        class_id: state.cardForm.classIdForAddCard,
        content: state.cardForm.content,
        title: state.cardForm.title,
        link: state.cardForm.url,
        video: state.cardForm.video,
        position: state.cardForm.indexList,
        label_id: state.labelForm.chooseLabel,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          const newListsAndCards = state.user.allUserData.map((list) => {
            if (list.class_id === state.user.allClassId[state.user.chooseClass] && list.list_id === state.cardForm.listIdForAddCard && list.all_card === null) {
              return {
                ...list,
                all_card: [response.data],
              };
            }
            if (list.class_id === state.user.allClassId[state.user.chooseClass] && list.list_id === state.cardForm.listIdForAddCard) {
              return {
                ...list,
                all_card: [...list.all_card, response.data],
              };
            }
            return list;
          });
          console.log('newListsAndCards:', newListsAndCards);
          store.dispatch(addCard(newListsAndCards));
        })
        .catch((error) => {
          console.log('je suis dans le catch du middleware cardForm', error);
        })
        .finally(() => {
          // i say loading is finish
          store.dispatch(finishLoading());
          store.dispatch(toggleModals('modalAddCard'));
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default cardForm;
