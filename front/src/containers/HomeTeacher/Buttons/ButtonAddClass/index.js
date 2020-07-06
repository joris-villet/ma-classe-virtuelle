/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import ButtonAddClass from 'src/components/HomeTeacher/Buttons/ButtonAddClass';
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
)(ButtonAddClass);
