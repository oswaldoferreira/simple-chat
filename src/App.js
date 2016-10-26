import React, { Component } from 'react';
import logo from './logo.svg';
import Message from './Message';
var io = require('socket.io-client');
var socket = io.connect('http://localhost:8080');
import './App.css';

class App extends Component {
  componentWillMount() {
    this.subscribeSockets();
  }

  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  onMessageSent() {
    let message = { authorName: this.props.authorName, text: this.messageInput.value };
    socket.emit('chat-message', message);
  }

  subscribeSockets() {
    socket.on('chat-message', (message) => {
      this.setState({ messages: [...this.state.messages, message] });
    });
  }

  renderMessages() {
    return this.state.messages.map((message) =>
                                   <Message
                                     authorName={message.authorName}
                                     text={message.text}
                                     avatarImage={"https://s-media-cache-ak0.pinimg.com/236x/86/dd/8b/86dd8bf8c98282ec2fa932b12ef231ae.jpg"}>
                                   </Message>);
  }

  render() {
    console.log('rendering');
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <h2>Messages</h2>
            <a href="#" title="Add Friend to this chat">+</a>
          </div>
          <div className="chat-box">
            {this.renderMessages()}
            <div className="enter-message">
              <input type="text" ref={(input) => this.messageInput = input} placeholder="Enter your message.."/>
              <a href="#" onClick={this.onMessageSent.bind(this)} className="send">Send</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

