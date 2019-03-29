import React from 'react';

class Messages extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  render() {
    return (
      <div>
        <ul className="messageList">
          {this.props.messages.map(msg =>
            <li key={msg._id}><span>{msg.username}: </span>{msg.text}</li>)}
        </ul>
      </div>
    );
  }
}

export default Messages;
