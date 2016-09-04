import React, { Component } from 'react';

class UserNameType extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    if(e.keyCode === 13 && this.username.value !== '')this.props.handleSetUser(this.username.value);
  }
  render() {
    return (
      <div>
        <div className="userLogin">
          <h3 className="title">請輸入性名</h3>
          <input id="c87" className="usernameInput" type="text" maxLength="14" ref={(name) => {this.username = name}} onKeyDown={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default UserNameType;
