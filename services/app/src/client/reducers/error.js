import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const error = handleActions({
  [actions.loginFailure](state, { payload: { errorMsg } }) {
    return { ...state, loginError: errorMsg };
  },
  [actions.loginSuccess]() {
    return { loginError: '', signupError: '' };
  },
  [actions.signupFailure](state, { payload: { errorMsg } }) {
    return { ...state, signupError: errorMsg };
  },
  [actions.signupSuccess]() {
    return { loginError: '', signupError: '' };
  },
}, { loginError: '', signupError: '' });

export default error;
