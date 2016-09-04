import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
// var Firebase = require('firebase');
import Chat from './Chat';
import UserNameType from './UserNameType';


class Home extends Component {
  constructor(props) {
    super(props);
    this._messageRef = new Firebase("https://<Your firebase project name>.firebaseio.com/");
    this._message = [];
    this.state = {
      messages: this._message,
      username: ''
    };
    this.handleReceive = this.handleReceive.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.setMessages = this.setMessages.bind(this);
    this.handleSetUser = this.handleSetUser.bind(this);
  }
  componentDidMount() {
    this._messageRef.on('child_added', (child) => {
      this.handleReceive({
        text: child.val().text,
        username: child.val().username,
        date: new Date(child.val().date)
      })
    })
  }
  handleReceive (message = {}) {
    this.setMessages(this._message.concat(message))
  }
  setMessages (messages) {
    this._message = messages
    this.setState({
      messages: messages
    })
  }
  handleSend(message = {}) {
    this._messageRef.push({
      text: message.text,
      username: message.username,
      date: new Date().getTime()
    })
  }
  handleSetUser(username){
    this.setState({username});
  }
  render() {
    return (
      <div>
        <div className="admdiv">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {this.state.username === '' ?
          <UserNameType handleSetUser={this.handleSetUser}/> :
          <Chat handleSend={this.handleSend}
                username={this.state.username}
                messages={this.state.messages}
        />}
      </div>
    );
  }
}
export default Home;
