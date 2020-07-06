/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import ButtonAccessClass from 'src/components/Home/ButtonAccessClass';

const mapStateToProps = (state) => ({
  role: state.user.role,
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonAccessClass);
