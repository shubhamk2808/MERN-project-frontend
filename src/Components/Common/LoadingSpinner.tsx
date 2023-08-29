import { Backdrop, CircularProgress, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

interface LoadingSpinnerProps {
    open: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ open }) => {
    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop} open={open}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default LoadingSpinner;
