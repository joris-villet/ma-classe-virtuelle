/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import CardUpdate from 'src/components/AllForms/CardUpdate';
import { changeValue, submitCardUpdate } from 'src/actions/user';
import { deleteCard } from 'src/actions/cardUpdate';
import { toggleModals } from 'src/actions/modals';

const mapStateToProps = (state) => ({
  infoTitleCard: state.user.infoTitleCard,
  infoContentCard: state.user.infoContentCard,
  addLabel: state.modal.addLabel,
  infoLinkCard: state.user.infoLinkCard,
  infoVideoCard: state.user.infoVideoCard,
});

const mapDispatchToProps = (dispatch) => ({
  submitCardUpdate: () => {
    const action = submitCardUpdate();
    dispatch(action);
  },
  changeValue: (name, value) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  toggleModals: (name) => {
    const action = toggleModals(name);
    dispatch(action);
  },
  deleteCard: () => {
    const action = deleteCard();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardUpdate);
