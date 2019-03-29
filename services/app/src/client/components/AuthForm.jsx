import React from 'react';

class AuthForm extends React.Component {
  render() {
    const style = {
      display: this.props.showForm === this.props.formType ? 'block' : 'none',
    };

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default AuthForm;
