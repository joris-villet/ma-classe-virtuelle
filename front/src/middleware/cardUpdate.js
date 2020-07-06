/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import axios from 'axios';

import {
  finishLoading,
  addCard,
} from 'src/actions/user';

import { SUBMIT_CARD_UPDATE, DELETE_CARD } from 'src/actions/cardUpdate';
import { toggleModals } from 'src/actions/modals';

const cardUpdate = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SUBMIT_CARD_UPDATE: {
      console.log('mise a jour d une carte');
      // console.log('content', state.cardUpdate.content);
      // console.log('title', state.cardUpdate.title);
      console.log('infoCard infoCard infoCard infoCard infoCard infoCard infoCard', state.user.infoCard.list_id);
      axios.put(`http://ec2-3-88-178-185.compute-1.amazonaws.com:7844/card/${state.user.infoCard.id}`, {
        list_id: state.user.infoCard.list_id,
        class_id: state.user.infoCard.class_id,
        content: state.user.infoContentCard,
        title: state.user.infoTitleCard,
        video: state.user.infoVideoCard,
        label_id: state.labelForm.chooseLabel,
        link: state.user.infoLinkCard,
        // position: state.cardUpdate.position,
        // label_id: 1,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          // The list on which I clicked on :
          const goodList = state.user.allUserData.filter((element) => element.class_id === state.user.allClassId[state.user.chooseClass] && element.list_id === state.user.infoCard.list_id);
          console.log('goodList', goodList);
          console.log('state.user.allUserData:', state.user.allUserData);
          // Get all cards without the clicked one, to add the new one after
          const cardsWithoutTheUpdatedOne = goodList[0].all_card.filter((element) => element.id !== state.user.infoCard.id); // [0] because we want to filter on the first index of the array
          console.log('cardsWithoutTheUpdatedOne', cardsWithoutTheUpdatedOne);

          // Add updated card to new Array without the old one
          cardsWithoutTheUpdatedOne.push(response.data);

          const newListsAndCards = state.user.allUserData.map((lists) => {
            console.log('lists', lists);
            if (lists.class_id === state.user.allClassId[state.user.chooseClass] && lists.list_id === state.user.infoCard.list_id) {
              return {
                ...lists,
                all_card: cardsWithoutTheUpdatedOne,
              };
            }
            return lists;
          });
          console.log('newListsAndCards:', newListsAndCards);

          store.dispatch(addCard(newListsAndCards));
          store.dispatch(toggleModals('modalOnClickCardTeacher'));
        })
        .catch((error) => {
          console.log('je suis dans le catch du middleware cardUpdate', error);
        })
        .finally(() => {
          // i say loading is finish
          store.dispatch(finishLoading());
        });
      next(action);
      break;
    }
    case DELETE_CARD: {
      console.log('suppression dune carte');
      // http://ec2-3-88-178-185.compute-1.amazonaws.com:7844
      axios.delete(`http://ec2-3-88-178-185.compute-1.amazonaws.com:7844/card/${state.user.infoCard.id}`, {
        withCredentials: true,
      })
        .then(() => {
          // The list on which I clicked on :
          const goodList = state.user.allUserData.filter((element) => element.class_id === state.user.allClassId[state.user.chooseClass] && element.list_id === state.user.infoCard.list_id);
          console.log('goodList', goodList);
          console.log('state.user.allUserData:', state.user.allUserData);
          // Get all cards without the clicked one, to delete from view
          const goodCards = goodList[0].all_card.filter((element) => element.id !== state.user.infoCard.id); // [0] because we want to filter on the first index of the array
          console.log('goodCards', goodCards);

          const newListsAndCards = state.user.allUserData.map((lists) => {
            console.log('lists', lists);
            if (lists.class_id === state.user.allClassId[state.user.chooseClass] && lists.list_id === state.user.infoCard.list_id) {
              return {
                ...lists,
                all_card: goodCards,
              };
            }
            return lists;
          });
          console.log('newListsAndCards:', newListsAndCards);
          store.dispatch(addCard(newListsAndCards));
          store.dispatch(toggleModals('modalOnClickCardTeacher'));
        })
        .catch((error) => {
          console.log('je suis dans le catch du middleware cardUpdate pour delete', error);
        })
        .finally(() => {
          // i say loading is finish
          store.dispatch(finishLoading());
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default cardUpdate;

// && list.all_card.id === state.infoCard.id
