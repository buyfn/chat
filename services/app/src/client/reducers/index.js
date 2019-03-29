import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import messages from './messages';
import messagesAreFetching from './messagesAreFetching';
import showForm from './showForm';
import user from './user';
import error from './error';
import userCount from './userCount';

const reducer = combineReducers({
  messages,
  messagesAreFetching,
  showForm,
  user,
  error,
  userCount,
  form: formReducer,
});

export default reducer;
