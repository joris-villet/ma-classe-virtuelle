/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import HomeTeacher from 'src/components/HomeTeacher';
import { toggleModals } from 'src/actions/modals';

const mapStateToProps = (state) => ({
  modalAddCard: state.modal.modalAddCard,
  modalOnClickCardTeacher: state.modal.modalOnClickCardTeacher,
  addClassModal: state.modal.addClassModal,
  addStudent: state.modal.addStudent,
  inscriptionModal: state.modal.inscriptionModal,
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
)(HomeTeacher);
