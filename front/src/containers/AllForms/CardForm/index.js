/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import CardForm from 'src/components/AllForms/CardForm';
import { changeValueCardForm, submitCardForm } from 'src/actions/cardForm';
import { toggleModals } from 'src/actions/modals';

const mapStateToProps = (state) => ({
  content: state.cardForm.content,
  title: state.cardForm.title,
  url: state.cardForm.url,
  video: state.cardForm.video,
});

const mapDispatchToProps = (dispatch) => ({
  submitCardForm: () => {
    const action = submitCardForm();
    dispatch(action);
  },
  changeValueCardForm: (name, value) => {
    const action = changeValueCardForm(name, value);
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
)(CardForm);
