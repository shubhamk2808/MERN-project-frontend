import React, { useState } from 'react';
import { Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChatArea from './Component/ChatArea';
import ChatInput from './Component/ChatInput';

interface ChatMessage {
    text: string;
    user: string;
}

const ChatApp: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const currentUser = 'user1'; // Replace with actual user

    const handleSendMessage = (message: string) => {
        setMessages([...messages, { text: message, user: currentUser }]);
    };

    return (
        <ChatWrapper className='container'>
            <Paper className='chatContainer' elevation={3}>
                <ChatArea messages={messages} currentUser={currentUser} />
                <ChatInput onSendMessage={handleSendMessage} />
            </Paper>
        </ChatWrapper>
    );
};

export default ChatApp;


const ChatWrapper = styled(Container)(({ theme }) => ({
    '.container': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: theme.spacing(4),
    },
    '.chatContainer': {
        width: '100%',
        maxWidth: '600px',
        padding: theme.spacing(2),
    },
}));