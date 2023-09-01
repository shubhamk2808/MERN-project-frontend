import React from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface MessageProps {
    text: string;
    isUserMessage: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isUserMessage }) => {
    return (
        <StyledPaper className={`message ${isUserMessage ? 'userMessage' : ''}`}>
            <Typography>{text}</Typography>
        </StyledPaper>
    );
};

export default Message;

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    maxWidth: '70%',
    alignSelf: 'flex-start',
    '.userMessage': {
        alignSelf: 'flex-end',
        backgroundColor: '#e1ffc7',
    },
}));