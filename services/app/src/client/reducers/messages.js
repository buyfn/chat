import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const messages = handleActions({
  [actions.fetchMessagesSuccess](state, { payload }) {
    return [...state, ...payload.messages];
  },
  [actions.recieveMessage](state, { payload: { text, username } }) {
    return [...state, { text, username }];
  },
}, []);

export default messages;
