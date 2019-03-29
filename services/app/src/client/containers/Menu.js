import { connect } from 'react-redux';

import Menu from '../components/Menu.jsx';
import { toggleForm, logout } from '../actions';

const mapStateToProps = (state) => {
  const props = {
    isLoggedIn: state.user.isLoggedIn,
    showForm: state.showForm,
    username: state.user.username,
  };
  return props;
};

const mapDispatchToProps = dispatch => ({
  toggleForm: (formType) => {
    dispatch(toggleForm(formType));
  },
  logout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
