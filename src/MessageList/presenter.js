import React, { Component } from 'react';
import Message from '../Message';

class MessageList extends Component {
    
    constructor(props){
        
        super(props);
        
        //Assign this to the right this 
        this.addMessage = this.addMessage.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);

        this.state = {
            inputText: ''
        }
    }
  
  /**
  * Handle Text Change
  **/
  handleTextChange(event){
    this.setState({ inputText: event.target.value});
  }

  /*
  * Add Message
  */
  addMessage (){
    //get the value from the text area
    this.props.addMessage("Grant", this.state.inputText, new Date());
    //this.setState({ messages: this.state.messages.concat([this.state.inputText])});
  }

  render() {
    const messageElements = this.props.messages.map(message => <Message author={message.author} messageText={message.text}/>);
    return (
        <div>
        <div>
        {messageElements}
        </div>

        <div>
        <textarea onChange={this.handleTextChange} rows="6"/>
        <button onClick={this.addMessage}>Submit</button>
        </div>
        </div>
    )
  }
}

export default MessageList;