import { connect } from 'react-redux';

import UserCounter from '../components/UserCounter.jsx';

const mapStateToProps = (state) => {
  const props = {
    userCount: state.userCount,
  };
  return props;
};

export default connect(mapStateToProps)(UserCounter);
