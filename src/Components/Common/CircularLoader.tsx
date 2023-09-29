import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';

export default function CircularLoader() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}