import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const userCount = handleActions({
  [actions.incUserCount](state, { payload: { onlineUsers } }) {
    return onlineUsers;
  },
  [actions.decUserCount](state, { payload: { onlineUsers } }) {
    return onlineUsers;
  },
}, 0);

export default userCount;
