import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const user = handleActions({
  [actions.loginSuccess](state, { payload: { username } }) {
    return { username, isLoggedIn: true };
  },
  [actions.signupSuccess](state, { payload: { username } }) {
    return { username, isLoggedIn: true };
  },
  [actions.logoutSuccess]() {
    return { username: 'anon', isLoggedIn: false };
  },
  [actions.checkLoginSuccess](state, { payload: { username } }) {
    return { username, isLoggedIn: true };
  },
}, { username: 'anon', isLoggedIn: false });

export default user;
