import React, { Component } from 'react';
import MessageList from './MessageList';
import UserList from './UserList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Join the Conversation!</h2>
        <UserList users={["Brandan", "Grant", "John"]} />
        <MessageList />
      </div>
    );
  }
}

export default App;
