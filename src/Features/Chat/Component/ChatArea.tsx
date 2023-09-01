import React from 'react';
import Message from './Message';
import { Box } from '@mui/material';

interface ChatAreaProps {
    messages: { text: string; user: string }[];
    currentUser: string;
}
const ChatArea: React.FC<ChatAreaProps> = ({ messages, currentUser }) => {
    // React.useEffect(() => {
    // }, [messages])
    // console.log({ messages })

    return (
        <Box>
            {messages.map((message, index) => (
                <Message
                    key={index}
                    text={message.text}
                    isUserMessage={message.user == currentUser}
                />
            ))}
        </Box>
    );
};

export default ChatArea;
