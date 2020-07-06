/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import HomeMain from 'src/components/Home/HomeMain';
import { toggleModals } from 'src/actions/modals';
import { studentOrTeacher, logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  connectModal: state.modal.connectModal,
  inscriptionModal: state.modal.inscriptionModal,
  logged: state.user.logged,
 
});

const mapDispatchToProps = (dispatch) => ({
  toggleModals: (name) => {
    const action = toggleModals(name);
    dispatch(action);
  },
  studentOrTeacher: (role) => {
    const action = studentOrTeacher(role);
    dispatch(action);
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeMain);
