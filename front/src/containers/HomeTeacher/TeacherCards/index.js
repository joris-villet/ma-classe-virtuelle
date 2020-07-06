/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import TeacherCards from 'src/components/HomeTeacher/TeacherCards';
import { toggleModals } from 'src/actions/modals';
import { cardInfos } from 'src/actions/user';

const mapStateToProps = (state) => ({
  modalAddCard: state.modal.modalAddCard,
  chooseClassValue: state.user.chooseClass,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModals: (name) => {
    const action = toggleModals(name);
    dispatch(action);
  },
  cardInfos: (cards) => {
    const action = cardInfos(cards);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeacherCards);
