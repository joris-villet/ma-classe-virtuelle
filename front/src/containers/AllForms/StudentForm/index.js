/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import StudentForm from 'src/components/AllForms/StudentForm';
import { changeValueStudentForm, submitStudentForm } from 'src/actions/studentForm';
import { toggleModals } from 'src/actions/modals';

const mapStateToProps = (state) => ({
  firstName: state.studentForm.firstName,
  lastName: state.studentForm.lastName,
  birthDate: state.studentForm.birthDate,
  email: state.studentForm.email,
  password: state.studentForm.password,
  errorNotSamePassword: state.error.errorNotSamePassword,
  classId: state.user.allClassId[state.user.chooseClass],
  errorFormStudent: state.error.errorFormStudent,
});

const mapDispatchToProps = (dispatch) => ({
  submitStudentForm: () => {
    const action = submitStudentForm();
    dispatch(action);
  },
  changeValueStudentForm: (name, value) => {
    const action = changeValueStudentForm(name, value);
    dispatch(action);
  },
  toggleModals: (name) => {
    const action = toggleModals(name);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StudentForm);
