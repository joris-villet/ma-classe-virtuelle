export const CHANGE_VALUE_INSCRIPTION = 'CHANGE_VALUE_INSCRIPTION';
export const SUBMIT_INSCRIPTION = 'SUBMIT_INSCRIPTION';

export const changeValueInscription = (name, value) => ({
  type: CHANGE_VALUE_INSCRIPTION,
  name,
  value,
});

export const submitInscription = () => ({
  type: SUBMIT_INSCRIPTION,
});
