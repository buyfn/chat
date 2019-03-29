import { connect } from 'react-redux';

import SignupForm from '../components/SignupForm.jsx';
import { signup } from '../actions';

const mapStateToProps = (state) => {
  const props = {
    errorMsg: state.error.signupError,
  };
  return props;
};

const mapDispatchToProps = dispatch => ({
  signup: (username, password) => {
    dispatch(signup(username, password));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupForm);
