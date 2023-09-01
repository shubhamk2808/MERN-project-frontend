import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';


interface LoadingSpinnerProps {
    open: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ open }) => {
    return (
        <StyledBackdrop open={open}>
            <CircularProgress color="inherit" />
        </StyledBackdrop>
    );
};

export default LoadingSpinner;

const StyledBackdrop = styled(Backdrop)`
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
`