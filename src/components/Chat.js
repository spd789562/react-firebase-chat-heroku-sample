import React, { Component } from 'react';
import ChatItem from './Chatitem';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.handleSend = this.handleSend.bind(this);
  }
  handleSend(e){
    if(e.keyCode === 13){
      this.props.handleSend({
        username: this.props.username,
        text: this.text.value
      })
      this.text.value = "";
      setTimeout(() => document.getElementsByClassName("chatmessage")[0].scrollTop = document.getElementsByClassName("chatmessage")[0].scrollHeight + 50,200);
    }
  }
  componentDidMount() {
    document.getElementsByClassName("chatmessage")[0].scrollTop = document.getElementsByClassName("chatmessage")[0].scrollHeight;
  }
  render() {
    return (
      <div className="chat">
        <ul className="chatmessage">
          {this.props.messages.map((item,index) => {
            return <ChatItem text={item.text} username={this.props.username === item.username?'':item.username} date={item.date} key={index}/>
          })}
        </ul>
        <div className="messagesInput">
          <input className="textInput" type="text" placeholder="輸入訊息..." onKeyDown={this.handleSend} ref={(text) => this.text = text}/>
        </div>
      </div>
    );
  }
}

export default Chat;
