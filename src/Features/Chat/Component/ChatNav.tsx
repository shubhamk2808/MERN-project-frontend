import React from 'react'
import styled from '@emotion/styled'
import { Avatar, Box, Divider, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCommentIcon from '@mui/icons-material/AddComment';
import GroupsIcon from '@mui/icons-material/Groups';

const ChatNav = () => {
    return (
        <ChatNavWrapper>
            <Box className='profileNav'>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', p: 1 }}>
                    <Avatar alt="Remy Sharp" src='' />
                    {/* <Typography>Shubham Pal</Typography> */}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                    <GroupsIcon />
                    <AddCommentIcon />
                    <MoreVertIcon />
                </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box className='chatNav'>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', p: 1 }}>
                    <Avatar alt="Remy Sharp" src='' />
                    <Typography>Shubham Pal</Typography>
                </Box>
                <MoreVertIcon />
            </Box>
        </ChatNavWrapper>
    )
}

export default ChatNav

const ChatNavWrapper = styled(Box)(({ theme }) => ({
    // backgroundColor: 'blue',
    border: '1px solid blue',
    height: '60px',
    display: 'flex',
    padding: '8px 0px',
    '.profileNav': {
        width: '500px',
        minWidth: '300px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'aqua'
    },
    '.chatNav': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}))