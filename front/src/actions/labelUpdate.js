export const SUBMIT_LABEL_UPDATE = 'SUBMIT_LABEL_UPDATE';
export const GET_ALL_LABEL = 'GET_ALL_LABEL';
export const CHOOSE_LABEL = 'CHOOSE_LABEL';

export const submitLabelUpdate = () => ({
  type: SUBMIT_LABEL_UPDATE,
});
// for selected label in labelForm
export const chooseLabel = (valueLabel) => ({
  type: CHOOSE_LABEL,
  valueLabel,
});
