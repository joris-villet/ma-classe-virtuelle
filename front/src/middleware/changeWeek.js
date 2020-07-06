/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import axios from 'axios';

import { CHANGE_WEEK, weekLists } from 'src/actions/user';

const changeWeek = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case CHANGE_WEEK: {
      console.log('creation d un élève');
      console.log('action.newWeek)', action.newWeek);
      console.log('state.user.allClassId[state.user.chooseClass]', state.user.allClassId[state.user.chooseClass]);
      console.log('state.user.state.user.week', state.user.week);
      axios.get(`http://ec2-3-88-178-185.compute-1.amazonaws.com:7844/list/class/${state.user.allClassId[state.user.chooseClass]}/${state.user.role}/${state.user.id}/week/${action.newWeek}`, {
        week: action.newWeek,
        cid: state.user.allClassId[state.user.chooseClass],
        tid: state.user.id,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log('response dans le then du changeWeek', response.data);
          store.dispatch(weekLists(response.data));
        })
        .catch((error) => {
          console.log('je suis dans le catch de changeWeek', error);
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

export default changeWeek;
