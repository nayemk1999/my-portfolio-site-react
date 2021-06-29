import React from 'react';
import { addResponseMessage, Widget } from 'react-chat-widget';

const Chat = () => {
    // useEffect(() => {
    //     addResponseMessage('Welcome to this awesome chat!');
    // }, []);
    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        // addResponseMessage(response);
    };
    return (
        <div style={{position: 'fixed'}}>
            <Widget
                subtitle="Please Send Your Message. "
                handleNewUserMessage={handleNewUserMessage}
            />
        </div>
    );
};

export default Chat;