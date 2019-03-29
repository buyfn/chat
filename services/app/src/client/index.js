import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './main.css';
import reducer from './reducers';
import Main from './components/Main.jsx';
import { fetchMessages, recieveMessage, incUserCount, decUserCount, checkLogin } from './actions';
import socket from './socket';
import socketMiddleware from './middleware/socket';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  applyMiddleware(thunk, socketMiddleware),
);

store.dispatch(fetchMessages());
store.dispatch(checkLogin());

socket.on('chat message', (msg) => {
  store.dispatch(recieveMessage(msg));
});

socket.on('connected', (onlineUsers) => {
  store.dispatch(incUserCount({ onlineUsers }));
});

socket.on('disconnected', (onlineUsers) => {
  store.dispatch(decUserCount({ onlineUsers }));
});

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app'),
);
