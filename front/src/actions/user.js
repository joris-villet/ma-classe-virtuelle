export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const FINISH_LOADING = 'FINISH_LOADING';
export const CONNECT = 'CONNECT';
export const LOGOUT = 'LOGOUT';
export const STUDENT_OR_TEACHER = 'STUDENT_OR_TEACHER';
export const INFO_CARD = 'INFO_CARD';
export const SUBMIT_CARD_UPDATE = 'SUBMIT_CARD_UPDATE';
export const STUDENT_CARD_CONTENT = 'STUDENT_CARD_CONTENT';
export const TOGGLE_CARD_COLOR = 'TOGGLE_CARD_COLOR';
export const GET_COOKIE = 'GET_COOKIE';
export const ADD_CARD = 'ADD_CARD';
export const CHANGE_CLASS = 'CHANGE_CLASS';
export const LOADING_COOKIE = 'LOADING_COOKIE';
export const GET_INFO_STUDENT = 'GET_INFO_STUDENT';
export const STUDENT_NUMBER_IN_CLASS = 'STUDENT_NUMBER_IN_CLASS';
export const CHANGE_WEEK = 'CHANGE_WEEK';
export const DATA_WEEK = 'DATA_WEEK';

// export const CHECK = 'CHECK';
export const changeValue = (name, value) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

export const login = () => ({
  type: LOGIN,
});

export const finishLoading = () => ({
  type: FINISH_LOADING,
});

export const connect = (allUserData, allClassId, allClassName, studentsNumberinClass) => ({
  type: CONNECT,
  allUserData,
  allClassId,
  allClassName,
  studentsNumberinClass,
});

export const logout = () => ({
  type: LOGOUT,
});

/* export const check = () => ({
  type: CHECK,
}); */

export const studentOrTeacher = (role) => ({
  type: STUDENT_OR_TEACHER,
  role,
});

export const cardInfos = (cards) => ({
  type: INFO_CARD,
  cards,
});

export const submitCardUpdate = () => ({
  type: SUBMIT_CARD_UPDATE,
});

export const studentCardsContent = (card) => ({
  type: STUDENT_CARD_CONTENT,
  card,
});

export const toggleCardColor = (name) => ({
  type: TOGGLE_CARD_COLOR,
  name,
});

export const getCookie = () => ({
  type: GET_COOKIE,
});

export const addCard = (newCard) => ({
  type: ADD_CARD,
  newCard,
});

export const chooseClass = (valueClass) => ({
  type: CHANGE_CLASS,
  valueClass,
});

export const loadingCookie = () => ({
  type: LOADING_COOKIE,
});

export const getCountStudent = () => ({
  type: GET_INFO_STUDENT,
});

export const studentNumberInClass = (responseData) => ({
  type: STUDENT_NUMBER_IN_CLASS,
  responseData,
});

export const changeWeek = (newWeek) => ({
  type: CHANGE_WEEK,
  newWeek,
});

export const weekLists = (dataWeek) => ({
  type: DATA_WEEK,
  dataWeek,
});
