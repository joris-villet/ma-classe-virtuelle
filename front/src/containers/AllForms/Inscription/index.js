/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import Inscription from 'src/components/AllForms/Inscription';
import { changeValueInscription, submitInscription } from 'src/actions/inscription';
import { toggleModals } from 'src/actions/modals';

const mapStateToProps = (state) => ({
  firstName: state.inscription.firstName,
  lastName: state.inscription.lastName,
  birthDate: state.inscription.birthDate,
  email: state.inscription.email,
  password: state.inscription.password,
  repeatPassword: state.inscription.repeatPassword,
  errorNotSamePassword: state.error.errorNotSamePassword,
  errorEmailExists: state.error.errorEmailExists,
});

const mapDispatchToProps = (dispatch) => ({
  submitInscription: () => {
    const action = submitInscription();
    dispatch(action);
  },
  changeValueInscription: (name, value) => {
    const action = changeValueInscription(name, value);
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
)(Inscription);
