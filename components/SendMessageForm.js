import React from 'react';

class SendMessageForm extends React.Component {
    render() {
        return (
            <div className="send-message-form">
                <form>
                    <input 
                        type="text"
                        placeholder="SendMessageForm"
                    />
                </form>
            </div>
        );
    }
}

export default SendMessageForm;