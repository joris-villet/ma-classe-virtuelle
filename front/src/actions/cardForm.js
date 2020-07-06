export const CHANGE_VALUE_CARD_FORM = 'CHANGE_VALUE_CARD_FORM';
export const SUBMIT_CARD_FORM = 'SUBMIT_CARD_FORM';
export const LIST_ID_FOR_ADD_CARD = 'LIST_ID_FOR_ADD_CARD';

export const changeValueCardForm = (name, value) => ({
  type: CHANGE_VALUE_CARD_FORM,
  name,
  value,
});

export const submitCardForm = () => ({
  type: SUBMIT_CARD_FORM,
});

export const listIdForAddCard = (indexList, listId, classId) => ({
  type: LIST_ID_FOR_ADD_CARD,
  listId,
  classId,
  indexList,
});
