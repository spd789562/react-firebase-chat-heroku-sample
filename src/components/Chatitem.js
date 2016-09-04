import React, { Component } from 'react';

class Chatitem extends Component {
  render() {
    const cl = (this.props.username === ''?"messagemy":"messageother");
    const date = this.props.date;
    const time = `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日  ${date.getHours()}:${date.getMinutes().toString().length === 1?0+date.getMinutes().toString():date.getMinutes()}`
    return (
      <li className={cl}>
        <div className="messagedate"><span>{time}</span></div>
        <div className="messageusername"><span>{this.props.username}</span></div>
        <div className="messagetext"><span>{this.props.text}</span></div>
      </li>
    );
  }
}

export default Chatitem;
