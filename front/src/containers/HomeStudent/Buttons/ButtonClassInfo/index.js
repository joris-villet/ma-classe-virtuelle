/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import ButtonClassInfo from 'src/components/HomeStudent/Buttons/ButtonClassInfo';

const mapStateToProps = (state) => ({
  classOfStudent: state.user.allUserData[0].class_title,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonClassInfo);
