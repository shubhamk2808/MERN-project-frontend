import styled from '@emotion/styled'
import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const ChatLists = () => {
    return (
        <Wrapper>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt="Remy Sharp" src='' sx={{ width: '50px', height: '50px' }} />
                    <Box sx={{ marginLeft: '8px' }}>
                        <Typography variant='h6'>Shubham pal</Typography>
                        <Typography fontSize={'0.9rem'}>Hello, How are you ?</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                    alignItems: 'end',
                    padding: '8px'
                }}>
                    <span>2:30 PM</span>
                    {/* <span>7</span> */}
                </Box>
            </Box>
        </Wrapper >
    )
}

export default ChatLists

const Wrapper = styled(Box)(({ theme }) => ({
    // backgroundColor: 'red',
    // border: '1px solid red',
}))