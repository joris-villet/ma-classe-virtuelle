/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import ButtonsWeek from 'src/components/HomeTeacher/Buttons/ButtonsWeek';
import { changeWeek } from 'src/actions/user';

const mapStateToProps = (state) => ({
  week: state.user.week,
  currentWeek: state.user.currentWeek,
  studentLogged: state.user.studentLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeWeek: (newWeek) => {
    const action = changeWeek(newWeek);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonsWeek);
