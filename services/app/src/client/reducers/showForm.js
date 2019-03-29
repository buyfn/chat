import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const showForm = handleActions({
  [actions.toggleForm](state, { payload }) {
    return payload;
  },
  [actions.loginSuccess]() {
    return 'none';
  },
  [actions.signupSuccess]() {
    return 'none';
  },
}, 'none');

export default showForm;
