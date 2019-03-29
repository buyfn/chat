import { connect } from 'react-redux';
import Messages from '../components/Messages.jsx';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages,
  };
  return props;
};

export default connect(mapStateToProps)(Messages);
