import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useAppDispatch, useAppSelector } from 'src/Hooks';
import { _toggleDrawer } from 'src/Redux/Reducers/customizationReducer';

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const { toggleDrawer } = useAppSelector((state) => state.customization);

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => dispatch(_toggleDrawer(false))}
      onKeyDown={() => dispatch(_toggleDrawer(false))}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        {/* <Button onClick={() => toggleDrawer}>left</Button> */}
        <Drawer
          anchor='left'
          open={toggleDrawer}
          onClose={() => dispatch(_toggleDrawer(false))}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
