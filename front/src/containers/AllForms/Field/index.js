/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import Field from 'src/components/AllForms/Field';

const mapStateToProps = (state) => ({
  errorNotSamePassword: state.error.errorNotSamePassword,
  errorEmailExists: state.error.errorEmailExists,
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Field);
