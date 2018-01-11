import React, { Component } from 'react';

class Message extends Component {
    render() {

        const author = this.props.author;
        const messageText = this.props.messageText;

        return (
            <div>
                <div style={{ textAlign: 'left'}}>
                    <div style={{fontWeight: 'bold' }}>{author}</div>
                    <span>{messageText}</span>
                </div>
            </div>
        )
    }
}

export default Message;