import React, { Component } from 'react';
import logo from './logo.svg';
import Message from './Message';
import './App.css';
let io = require('socket.io-client');
let socket = io.connect(process.env.SOCKET_URI || 'http://0.0.0.0:8081');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentWillMount() {
    this.subscribeSockets();
  }

  componentDidMount() {
    this.messageInput.focus();
  }

  onMessageSent() {
    if (this.messageInput.value !== '') {
      let message = { authorName: this.props.authorName, text: this.messageInput.value };
      socket.emit('chat-message', message);
      this.messageInput.value = '';
    }
  }

  sendMessageOnEnter(event) {
    if (event.key === 'Enter') {
      this.onMessageSent();
    }
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
            <h2>Mensagens</h2>
          </div>
          <div className="chat-box">
            {this.renderMessages()}
            <div className="enter-message">
              <input type="text" onKeyUp={this.sendMessageOnEnter.bind(this)} ref={(input) => this.messageInput = input} placeholder="Digite sua mensagem.." />
              <a href="#" onClick={this.onMessageSent.bind(this)} className="send">Enviar</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

