/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import ClassChange from 'src/components/AllForms/ClassChange';
import { chooseClass, getCountStudent } from 'src/actions/user';

const mapStateToProps = (state) => ({
  allClassId: state.user.allClassId,
  chooseClassValue: state.user.chooseClass,
  allClassName: state.user.allClassName,
});

const mapDispatchToProps = (dispatch) => ({

  chooseClass: (valueClass) => {
    const action = chooseClass(valueClass);
    dispatch(action);
  },
  getCountStudent: () => {
    const action = getCountStudent();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClassChange);
