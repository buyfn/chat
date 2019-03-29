const socketMiddleware = store => next => (action) => { // eslint-disable-line no-unused-vars
  if (action.type === 'MESSAGE_POST') {
    action.meta.socket.emit('chat message', action.payload.msg);
  }
  next(action);
};

export default socketMiddleware;
