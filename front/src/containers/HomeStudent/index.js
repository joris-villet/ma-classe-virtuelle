/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import HomeStudent from 'src/components/HomeStudent';
import { toggleModals } from 'src/actions/modals';

const mapStateToProps = (state) => ({
  modalOnClickCardStudent: state.modal.modalOnClickCardStudent,
  allUserData: state.user.allUserData,
  classId: state.user.allClassId[state.user.chooseClass],
});

const mapDispatchToProps = (dispatch) => ({
  toggleModals: (name) => {
    const action = toggleModals(name);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeStudent);
