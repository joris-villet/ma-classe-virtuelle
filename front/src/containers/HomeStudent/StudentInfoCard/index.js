import { connect } from 'react-redux';

import studentInfoCard from 'src/components/HomeStudent/StudentInfoCard';

const mapStateToProps = (state) => ({
  cardStudent: state.user.cardStudent,

});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(studentInfoCard);
