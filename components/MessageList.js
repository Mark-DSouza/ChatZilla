import React, { Fragment } from 'react'

// import Message from './Message';

const DUMMY_DATA = [
    {
        senderId: 'perborgen',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'janedoe',
        text: 'Great! How about you?'
    },
    {
        senderId: 'perborgen',
        text: 'Good to hear! I am great as well'
    }
];

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {DUMMY_DATA.map((element, index) => 
                    (
                        <div key={index} className="message">
                            <div className="message-username">{element.senderId}</div>
                            <div className="message-text">{element.text}</div>
                        </div>
                    )
                )}
            </div>
        )
    }
}

export default MessageList;