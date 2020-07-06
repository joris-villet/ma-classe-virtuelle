/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import axios from 'axios';

import {
  LOGIN,
  LOGOUT,
  connect,
  finishLoading,
} from 'src/actions/user';

import { errorLogin } from 'src/actions/error';
import { toggleModals } from 'src/actions/modals';

const login = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case LOGIN: {
      console.log('LOGIN middleware');
      axios.post('http://ec2-3-88-178-185.compute-1.amazonaws.com:7844/login', {
        email: state.user.email,
        password: state.user.password,
        role: state.user.role,
      }, {
        // on peut passer un objet de configuration à axios
        // ici on passe la config withCredntials à true pour autoriser l'échange de cookie avec l'API
        withCredentials: true,
      })
        .then((response) => {
          console.log('je passe dans le then de login mid');
          console.log('response.data du loginnn:', response.data);
          console.log('response.data.message:', response.data.message);
          // console.log('response.data.count[0].class_id', response.data.count[0].class_id);
          if (response.data.message === 'Email ou password introuvable') {
            // Classname change for css error in loginForm component
            store.dispatch(errorLogin());
            return;
          }
          const listId = response.data.listsAndCards.filter((element) => element);
          console.log('listId', listId);
          const classID = listId.map((element) => element.class_id);
          console.log('classID', classID);
          const uniqueClassId = new Set(classID);
          const allClassId = [...uniqueClassId];
          console.log('allClassId', allClassId);
          const className = listId.map((element) => element.class_title);
          const uniqueClassName = new Set(className);
          const allClassName = [...uniqueClassName];
          console.log('response.data.count[0].class_id', response.data.count[0].class_id)

          const studentsNumberinClass = () => {
            if (response.data.count[0].class_id === 0) {
              return '0';
            }
            return response.data.count[0].count;
          };
          console.log('studentsNumberinClass', studentsNumberinClass());
          // si studentsNumberinClass = 0 il peux se connecter
          store.dispatch(connect(response.data, allClassId, allClassName, studentsNumberinClass()));
          store.dispatch(toggleModals('connectModal'));
        })
        .catch((error) => {
          // console.log('error:', error);
          console.trace('je passe dans catch error', error);
        })
        .finally(() => {
          // i say loading is finish
          store.dispatch(finishLoading());
        });
      next(action);
      break;
    }
    case LOGOUT:
      // déclencher la requete axios pour dire au serveur qu'on se déconnecte
      axios.get('http://ec2-3-88-178-185.compute-1.amazonaws.com:7844/logout', {
        withCredentials: true,
      });
      // laisser passer l'action pour qu'elle arrive dans le reducer pour que dans mon state l'utilisateur soit considérer comme déconnecté
      next(action);
      break;
    default:
      // je laisse passer l'action au middleware/reducer suivant
      next(action);
  }
};

export default login;
