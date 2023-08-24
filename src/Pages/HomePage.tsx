import React, { startTransition } from 'react'
import { Button } from '@mui/material'
import { useAppDispatch } from 'src/Hooks'
import { toggleTheme } from 'src/Redux/Reducers/themeSlice'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  return (
    <>
      <h1>HomePage</h1>
      <Button onClick={() => dispatch(toggleTheme())}>Toggle Theme</Button>
      <Link to="/login">Go to login</Link>
      <Button onClick={() => startTransition(() => navigate('/login'))}>
        Login
      </Button>
    </>
  )
}

export default HomePage
