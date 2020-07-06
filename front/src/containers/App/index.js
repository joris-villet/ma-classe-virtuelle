/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { getCookie } from 'src/actions/user';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  teacherLogged: state.user.teacherLogged,
  studentLogged: state.user.studentLogged,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getCookie: () => {
    const action = getCookie();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
