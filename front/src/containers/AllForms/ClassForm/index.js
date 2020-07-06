/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import ClassForm from 'src/components/AllForms/ClassForm';
import { changeValueClassForm, submitClassForm } from 'src/actions/classForm';
import { toggleModals } from 'src/actions/modals';

const mapStateToProps = (state) => ({
  code: state.classForm.code,
  errorFormClass: state.error.errorFormClass,
});

const mapDispatchToProps = (dispatch) => ({
  submitClassForm: () => {
    const action = submitClassForm();
    dispatch(action);
  },
  changeValueClassForm: (name, value) => {
    const action = changeValueClassForm(name, value);
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
)(ClassForm);
