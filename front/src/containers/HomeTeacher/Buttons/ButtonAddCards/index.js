/* eslint-disable import/no-unresolved */

import { connect } from 'react-redux';

import ButtonAddCards from 'src/components/HomeTeacher/Buttons/ButtonAddCards';
import { toggleModals } from 'src/actions/modals';
import { listIdForAddCard } from 'src/actions/cardForm';

const mapStateToProps = (state) => ({
  modalAddCard: state.modal.modalAddCard,

});

const mapDispatchToProps = (dispatch) => ({
  toggleModals: (name) => {
    const action = toggleModals(name);
    dispatch(action);
  },
  listIdForAddCard: (indexList, listId, classId) => {
    const action = listIdForAddCard(indexList, listId, classId);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonAddCards);
