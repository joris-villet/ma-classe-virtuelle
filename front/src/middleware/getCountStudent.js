/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import axios from 'axios';
import {
  GET_INFO_STUDENT,
  finishLoading,
  studentNumberInClass,
} from 'src/actions/user';

const getCountStudent = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case GET_INFO_STUDENT: {
      const idClass = parseInt(state.user.allClassId[state.user.chooseClass], 10);
      console.log('state.user.allClassId[state.user.chooseClass]', state.user.allClassId[state.user.chooseClass]);
      axios.get(`http://ec2-3-88-178-185.compute-1.amazonaws.com:7844/class/info/${idClass}`, {
        withCredentials: true,
      })
        .then((response) => {
          console.log('response.data:', response.data.count[0].count);
          store.dispatch(studentNumberInClass(response.data.count[0].count));
        })
        .catch((error) => {
          console.log(error);
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
export default getCountStudent;
