import React from 'react'
import ChatLists from './ChatLists'
import styled from '@emotion/styled'
import { Box, Divider } from '@mui/material'
import SearchInput from 'src/Components/Common/SearchInput'
import FilterListIcon from '@mui/icons-material/FilterList';

const ChatSidebar = () => {
    return (
        <ChatSideBarWrapper>
            <Box className='searchInput'>
                <SearchInput />
                <FilterListIcon />
            </Box>
            <Box sx={{
                overflow: 'auto',
            }}>
                <ChatLists />
                <Divider />
                <ChatLists />
                <Divider />
                <ChatLists />
                <Divider />
                <ChatLists />
                <Divider />
                <ChatLists />
                <Divider />
                <ChatLists />
                <Divider />
                <ChatLists />
                <Divider />
                <ChatLists />
                <Divider />
                <ChatLists />
                <Divider />
                <ChatLists />
                <Divider />
                <ChatLists />
                <Divider />
                <ChatLists />
                <Divider />
                <ChatLists />
                <Divider />
                <ChatLists />
                <Divider />
            </Box>
        </ChatSideBarWrapper>
    )
}

export default ChatSidebar

const ChatSideBarWrapper = styled(Box)(({ theme }) => ({
    width: '500px',
    overflow: 'auto',
    border: '1px solid black',
    '.searchInput': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightgrey'
    }
}))