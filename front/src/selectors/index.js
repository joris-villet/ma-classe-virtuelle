/* eslint-disable import/prefer-default-export */
export const checkSamePassword = (passeword, repeatpassword) => {
  if (passeword === repeatpassword) {
    return true;
  }
  return false;
};

export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const splitTextarea = (array) => {
  return array.split('\n');
}