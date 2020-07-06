/* eslint-disable import/no-unresolved */
// ici je crée un second reducer qui gère toutes les infos liées au user
import {
  CHANGE_VALUE,
  LOGIN,
  LOGOUT,
  CONNECT,
  FINISH_LOADING,
  STUDENT_OR_TEACHER,
  INFO_CARD,
  STUDENT_CARD_CONTENT,
  ADD_CARD,
  CHANGE_CLASS,
  LOADING_COOKIE,
  TOGGLE_CARD_COLOR,
  STUDENT_NUMBER_IN_CLASS,
  CHANGE_WEEK,
  DATA_WEEK,
} from 'src/actions/user';

import {
  ADD_CLASS,
} from 'src/actions/classForm';

export const initialState = {
  email: '',
  password: '',
  id: '',
  role: 'teacher',
  teacherLogged: false,
  studentLogged: false,
  logged: false,
  loading: false,
  allUserData: {},
  allLabel: '',
  studentCardClicked: false,
  allClassId: [],
  chooseClass: 0,
  week: '',
  currentWeek: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN:
      return {
        ...state,
        loading: true,
        // email: '',
        // password: '',
      };
    case LOADING_COOKIE:
      return {
        ...state,
        loading: true,
        // email: '',
        // password: '',
      };
    case LOGOUT:
      return {
        ...state,
        // for explicit state i choose concatenation teacherLogged its better to understand
        [`${state.role}Logged`]: false,
        logged: false,
        email: '',
        password: '',
        role: 'teacher',
        id: '',
        allUserData: '',
        chooseClass: 0,
      };
    case CONNECT:
      return {
        ...state,
        // for explicit state i choose concatenation teacherLogged its better to understand
        [`${action.allUserData.account.role}Logged`]: true,
        logged: true,
        id: action.allUserData.account.id,
        allUserData: action.allUserData.listsAndCards,
        role: action.allUserData.account.role,
        allLabel: action.allUserData.label,
        allClassId: action.allClassId,
        allClassName: action.allClassName,
        studentsNumberinClass: action.studentsNumberinClass,
        week: action.allUserData.week,
        currentWeek: action.allUserData.week,
      };
    case STUDENT_NUMBER_IN_CLASS:
      return {
        ...state,
        studentsNumberinClass: action.responseData,
      };
    case INFO_CARD:
      return {
        ...state,
        infoCard: action.cards,
        infoTitleCard: action.cards.title,
        infoContentCard: action.cards.content,
        infoLinkCard: action.cards.link,
        infoVideoCard: action.cards.video,
      };
    case STUDENT_CARD_CONTENT:
      return {
        ...state,
        cardStudent: action.card,
      };
    case ADD_CARD:
      return {
        ...state,
        allUserData: action.newCard,
      };
    case ADD_CLASS:
      return {
        ...state,
        allClassId: action.allClassId,
        // newClassIdInAllClass
        allUserData: action.responseData,
        chooseClass: action.lastIndexClassId,
        allClassName: action.allClassName,
        week: state.currentWeek,
      };
    case TOGGLE_CARD_COLOR:
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    case FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case STUDENT_OR_TEACHER:
      return {
        ...state,
        role: action.role,
      };
    case CHANGE_CLASS:
      return {
        ...state,
        chooseClass: parseInt((action.valueClass), 10),
      };
    case CHANGE_WEEK:
      return {
        ...state,
        week: action.newWeek,
      };
    case DATA_WEEK:
      return {
        ...state,
        allUserData: action.dataWeek,
      };
    default:
      return state;
  }
};

export default reducer;
