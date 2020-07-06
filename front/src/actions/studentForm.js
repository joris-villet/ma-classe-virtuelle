export const CHANGE_VALUE_STUDENT_FORM = 'CHANGE_VALUE_STUDENT_FORM';
export const SUBMIT_STUDENT_FORM = 'SUBMIT_STUDENT_FORM';

export const changeValueStudentForm = (name, value) => ({
  type: CHANGE_VALUE_STUDENT_FORM,
  name,
  value,
});

export const submitStudentForm = () => ({
  type: SUBMIT_STUDENT_FORM,
});
