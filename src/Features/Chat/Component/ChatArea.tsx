import React from 'react';
import Message from './Message';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

interface ChatAreaProps {
    messages: { text: string; user: string }[];
    currentUser: string;
}
const ChatArea: React.FC<ChatAreaProps> = ({ messages, currentUser }) => {
    // React.useEffect(() => {
    // }, [messages])
    // console.log({ messages })

    return (
        <ChatAreaWrapper>
            chat area
            {messages.map((message, index) => (
                <Message
                    key={index}
                    text={message.text}
                    isUserMessage={message.user == currentUser}
                />
            ))}
        </ChatAreaWrapper>
    );
};

export default ChatArea;

const ChatAreaWrapper = styled(Box)(({ theme }) => ({
    // backgroundColor: 'cyan',
    border: '1px solid cyan',
    height: '100%',
    width: '100%',
}))