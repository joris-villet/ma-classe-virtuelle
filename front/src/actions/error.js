export const NOT_SAME_PASSWWORD = 'NOT_SAME_PASSWWORD';
export const SAME_PASSWORD = 'SAME_PASSWORD';
export const EMAIL_EXISTS = 'EMAIL_EXISTS';
export const EMAIL_DOES_NOT_EXIST = 'EMAIL_DOES_NOT_EXIST';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const ERROR_FORM_CLASS = 'ERROR_FORM_CLASS';
export const ERROR_FORM_STUDENT = 'ERROR_FORM_STUDENT';

export const errorNotSamePassword = () => ({
  type: NOT_SAME_PASSWWORD,
});

export const samePassword = () => ({
  type: SAME_PASSWORD,
});

export const errorEmailExists = () => ({
  type: EMAIL_EXISTS,
});

export const emailDoesNotExist = () => ({
  type: EMAIL_DOES_NOT_EXIST,
});

export const errorLogin = () => ({
  type: ERROR_LOGIN,
});

export const errorFormClass = () => ({
  type: ERROR_FORM_CLASS,
});

export const errorFormStudent = () => ({
  type: ERROR_FORM_STUDENT,
});

