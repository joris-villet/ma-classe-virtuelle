/* eslint-disable import/no-unresolved */
// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import login from '../middleware/login';
import inscription from '../middleware/inscription';
import classForm from '../middleware/classForm';
import studentForm from '../middleware/studentForm';
import cardForm from '../middleware/cardForm';
import cardUpdate from '../middleware/cardUpdate';
import labelUpdate from '../middleware/labelUpdate';
import getCookie from '../middleware/getCookie';
import getCountStudent from '../middleware/getCountStudent';
import changeWeek from '../middleware/changeWeek';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    login,
    inscription,
    classForm,
    studentForm,
    cardForm,
    cardUpdate,
    labelUpdate,
    getCookie,
    getCountStudent,
    changeWeek,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
