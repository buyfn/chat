import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const messagesAreFetching = handleActions({
  [actions.messagesFetchRequest]() {
    return true;
  },
  [actions.messagesFetchSuccess]() {
    return false;
  },
  [actions.messagesFetchFailure]() {
    return false;
  },
}, false);

export default messagesAreFetching;
