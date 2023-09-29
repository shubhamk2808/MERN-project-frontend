import React, { useState } from 'react';
import { Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChatArea from './Component/ChatArea';
import ChatInput from './Component/ChatInput';
import ChatLists from './Component/ChatLists';
import ChatNav from './Component/ChatNav';
import ChatSidebar from './Component/ChatSidebar';

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
        <ChatWrapper>
            {/* <Paper className='chatContainer' elevation={3}>
                <ChatArea messages={messages} currentUser={currentUser} />
                <ChatInput onSendMessage={handleSendMessage} />
            </Paper> */}
            <ChatNav />
            <Box className='chatScreen'>
                <ChatSidebar />
                <ChatArea messages={messages} currentUser={currentUser} />
            </Box>
        </ChatWrapper>
    );
};

export default ChatApp;


const ChatWrapper = styled(Box)(({ theme }) => ({
    // backgroundColor: 'green',
    width: '100%',
    padding: '10px 50px',
    '.chatScreen': {
        display: 'flex',
        // backgroundColor: 'orange',
        height: 'calc(100vh - 60px)'
    }
}));