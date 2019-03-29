import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm.jsx';
import { login } from '../actions';

const mapStateToProps = (state) => {
  const props = {
    errorMsg: state.error.loginError,
  };
  return props;
};

const mapDispatchToProps = dispatch => ({
  login: (username, password) => {
    dispatch(login(username, password));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
