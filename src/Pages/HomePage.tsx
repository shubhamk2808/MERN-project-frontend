import React from 'react'
import { Button } from '@mui/material'
import { useAppDispatch } from 'src/Hooks';
import { toggleTheme } from 'src/Redux/Reducers/themeSlice';

const HomePage = () => {
  const dispatch = useAppDispatch();
  return (
    <>
    <h1>HomePage</h1>
      <Button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </Button>
    </>
    )
}

export default HomePage
