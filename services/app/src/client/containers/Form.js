import { connect } from 'react-redux';

import Form from '../components/Form.jsx';
import { postMessage } from '../actions';

const mapStateToProps = (state) => {
  const props = {
    username: state.user.username,
  };
  return props;
};

const mapDispatchToProps = dispatch => ({
  postMessage: (msg, socket) => {
    dispatch(postMessage(msg, socket));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
