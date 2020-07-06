export const CHANGE_VALUE_CLASS_FORM = 'CHANGE_VALUE_CLASS_FORM';
export const SUBMIT_CLASS_FORM = 'SUBMIT_CLASS_FORM';
export const ADD_CLASS = 'ADD_CLASS';

export const changeValueClassForm = (name, value) => ({
  type: CHANGE_VALUE_CLASS_FORM,
  name,
  value,
});

export const submitClassForm = () => ({
  type: SUBMIT_CLASS_FORM,
});

export const idClassAfterCreate = (responseData, allClassId, lastIndexClassId, allClassName) => ({
  type: ADD_CLASS,
  allClassId,
  lastIndexClassId,
  responseData,
  allClassName,
});
