import React from 'react';
import { reduxForm, Field } from 'redux-form';

import socket from '../socket';

class Form extends React.Component {
  postMessage = (values) => {
    const message = {
      text: values.newMessageText,
      username: this.props.username,
    };
    this.props.postMessage(message, socket);
    this.props.reset();
  }

  render() {
    return (
      <div className="chatForm">
        <form onSubmit={this.props.handleSubmit(this.postMessage)}>
          <Field autoComplete="off" name="newMessageText" required component="input" type="text" className="chatForm__input" id="newMessageText" />
          <button className="btn btn--main" type="submit" id="sendMessage">Send</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'newMessage',
})(Form);
