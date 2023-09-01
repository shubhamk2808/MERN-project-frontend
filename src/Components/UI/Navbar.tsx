import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Navbar = () => {

    return (
        <Wrapper>
            <AppBar position="static" className='appBar'>
                <Toolbar>
                    <Typography variant="h6" className='title'>
                        My App
                    </Typography>
                    <div>
                        {/* Place your navigation links or other header content here */}
                    </div>
                </Toolbar>
            </AppBar>
        </Wrapper>
    );
};

export default Navbar;

const Wrapper = styled('div')(({ theme }) => ({
    '.appBar': {
        backgroundColor: theme.palette.primary.main,
    },
    '.title': {
        flexGrow: 1,
    },
}))