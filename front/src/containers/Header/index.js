/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import Header from 'src/components/Header';
import { logout } from 'src/actions/user';
import { toggleModals } from 'src/actions/modals';
import { studentOrTeacher } from 'src/actions/user';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
  toggleModals: (name) => {
    const action = toggleModals(name);
    dispatch(action);
  },
  studentOrTeacher: (role) => {
    const action = studentOrTeacher(role);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
