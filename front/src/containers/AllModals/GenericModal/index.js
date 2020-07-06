/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import GenericModal from 'src/components/AllModals/GenericModal';
import { toggleModals } from 'src/actions/modals';

const mapStateToProps = () => ({
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
)(GenericModal);
