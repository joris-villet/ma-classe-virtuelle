/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import axios from 'axios';
import {
  GET_COOKIE,
  connect,
  finishLoading,
  loadingCookie,
} from 'src/actions/user';

const getCookie = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case GET_COOKIE: {
      store.dispatch(loadingCookie());
      console.log('middleware COOKIE');
      axios.get('http://ec2-3-88-178-185.compute-1.amazonaws.com:7844/islogged', {
        withCredentials: true,
      })
        .then((response) => {
          console.log('response.data:', response.data);
          if (response.data.done === true) {
            const listId = response.data.data.listsAndCards.filter((element) => element);
            const classID = listId.map((element) => element.class_id);
            const uniqueClassId = new Set(classID);
            const allClassId = [...uniqueClassId];
            const className = listId.map((element) => element.class_title);
            const uniqueClassName = new Set(className);
            const allClassName = [...uniqueClassName];
            // console.log('response.data.count.count[state.user.chooseClass].count', response.data.count[state.user.chooseClass]);
            // let studentsNumberinClass = '';


            const studentsNumberinClass = () => {
              if (response.data.data.count[0].class_id === 0) {
                return '0';
              }
              return response.data.data.count[0].count;
            };
            console.log('studentsNumberinClass', studentsNumberinClass());
            // const firstLetterSlugUppercase = capitalize(state.user.slug);
            // const classOne = response.data[`list${firstLetterSlugUppercase}`].slice(0, 5);
            // console.log(selectClass('a coder dans middleware login', response.data.listTeacher, 0, 5));
            // je veux dire que mon user est connecté
            // dispatch name of auth and true un reducer for say teacher or student is connect
            // console.log('response.data.info.role', response.data.info.role);
  
            store.dispatch(connect(response.data.data, allClassId, allClassName, studentsNumberinClass()));
          }
          // store.dispatch(connect(response.data));
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
export default getCookie;
