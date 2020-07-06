/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import ButtonAddLabel from 'src/components/HomeTeacher/Buttons/ButtonAddLabel';
import {toggleModals} from 'src/actions/modals';

const mapStateToProps = (state) => ({
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
)(ButtonAddLabel);
