/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import LoginForm from 'src/components/AllForms/LoginForm';
import { changeValue, login, logout } from 'src/actions/user';
import { toggleModals } from 'src/actions/modals';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  loading: state.user.loading,
  errorLogin: state.error.errorLogin,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  handleLogin: () => {
    const action = login();
    dispatch(action);
  },
  handleLogout: () => {
    dispatch(logout());
  },
  toggleModals: (name) => {
    const action = toggleModals(name);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
