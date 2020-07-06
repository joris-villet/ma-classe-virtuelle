/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import LabelForm from 'src/components/AllForms/LabelForm';
import { chooseLabel } from 'src/actions/labelUpdate';

const mapStateToProps = (state) => ({
  allLabel: state.user.allLabel,
});

const mapDispatchToProps = (dispatch) => ({

  chooseLabel: (valueLabel) => {
    console.log('container valueLabel:', valueLabel);
    const action = chooseLabel(valueLabel);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LabelForm);
