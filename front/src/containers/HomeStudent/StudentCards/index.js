/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import studentCards from 'src/components/HomeStudent/StudentCards';
import { toggleModals } from 'src/actions/modals';
import { studentCardsContent, toggleCardColor } from 'src/actions/user';

const mapStateToProps = (state) => ({
  modalAddCard: state.modal.modalAddCard,
  studentCardClicked: state.user.studentCardClicked,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModals: (name) => {
    const action = toggleModals(name);
    dispatch(action);
  },
  studentCardsContent: (card) => {
    const action = studentCardsContent(card);
    dispatch(action);
  },
  toggleCardColor: (name) => {
    const action = toggleCardColor(name);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(studentCards);
