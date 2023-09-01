import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <StyledBox>
            <TextField
                variant="outlined"
                label="Type a message"
                value={message}
                onChange={handleMessageChange}
            />
            <Button variant="contained" color="primary" onClick={handleSendMessage}>
                Send
            </Button>
        </StyledBox >
    );
};

export default ChatInput;



const StyledBox = styled(Box)(({ theme }) => ({
    'display': 'flex',
    'alignItems': 'center',
    'padding': theme.spacing(2),
    'input': {
        marginRight: theme.spacing(2),
        flexGrow: 1,
    },
}));