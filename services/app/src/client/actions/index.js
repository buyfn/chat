import axios from 'axios';
import { reset } from 'redux-form';
import { createAction } from 'redux-actions';

import * as auth from '../auth';

export const postMessage = createAction(
  'MESSAGE_POST',
  msg => ({ msg }),
  (msg, socket) => ({ socket }),
);

export const recieveMessage = createAction('MESSAGE_RECIEVE');

export const toggleForm = createAction('TOGGLE_FORM');

export const fetchMessagesRequest = createAction('MESSAGES_FETCH_REQUEST');
export const fetchMessagesSuccess = createAction('MESSAGES_FETCH_SUCCESS');
export const fetchMessagesFailure = createAction('MESSAGES_FETCH_ERROR');
export const fetchMessages = () => async (dispatch) => {
  dispatch(fetchMessagesRequest());
  try {
    const response = await axios.get('/messages');
    const messages = response.data.map(msg => ({ ...msg, text: msg.message }));
    dispatch(fetchMessagesSuccess({ messages }));
  } catch (e) {
    dispatch(fetchMessagesFailure({ error: e }));
  }
};

export const incUserCount = createAction('INC_USER_COUNT');
export const decUserCount = createAction('DEC_USER_COUNT');

export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailure = createAction('LOGIN_FAILURE');
export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await auth.login(username, password);
    if (response.result) {
      dispatch(loginSuccess({ username }));
      dispatch(reset('login'));
    } else {
      dispatch(loginFailure({ errorMsg: response.errorMsg }));
    }
  } catch (e) {
    dispatch(loginFailure({ errorMsg: e }));
  }
};

export const logoutRequest = createAction('LOGOUT_REQUEST');
export const logoutSuccess = createAction('LOGOUT_SUCCESS');
export const logoutFailure = createAction('LOGOUT_FAILURE');
export const logout = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await auth.logout();
    dispatch(logoutSuccess());
  } catch (e) {
    dispatch(logoutFailure());
  }
};

export const signupRequest = createAction('SIGNUP_REQUEST');
export const signupSuccess = createAction('SIGNUP_SUCCESS');
export const signupFailure = createAction('SIGNUP_FAILURE');
export const signup = (username, password) => async (dispatch) => {
  dispatch(signupRequest());
  try {
    const response = await auth.createUser(username, password);
    if (response.result) {
      dispatch(signupSuccess({ username }));
      dispatch(reset('signup'));
    } else {
      dispatch(signupFailure({ errorMsg: response.errorMsg }));
    }
  } catch (e) {
    dispatch(signupFailure({ errorMsg: e }));
  }
};

export const checkLoginRequest = createAction('CHECK_LOGIN_REQUEST');
export const checkLoginSuccess = createAction('CHECK_LOGIN_SUCCESS');
export const checkLoginFailure = createAction('CHECK_LOGIN_FAILURE');
export const checkLogin = () => async (dispatch) => {
  dispatch(checkLoginRequest());
  try {
    const response = await auth.checkLogin();
    if (response.username) {
      dispatch(checkLoginSuccess({ username: response.username }));
    }
  } catch (e) {
    dispatch(checkLoginFailure());
  }
};
