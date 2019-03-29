import { connect } from 'react-redux';

import AuthForm from '../components/AuthForm.jsx';

const mapStateToProps = (state) => {
  const props = {
    showForm: state.showForm,
  };
  return props;
};

export default connect(mapStateToProps)(AuthForm);
