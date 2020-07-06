/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import ButtonClassInfo from 'src/components/HomeTeacher/Buttons/ButtonClassInfo';

const mapStateToProps = (state) => ({
  studentsNumberinClass: state.user.studentsNumberinClass,
  nameOfClass: state.user.allClassName[state.user.chooseClass],
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonClassInfo);
