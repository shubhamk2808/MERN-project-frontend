import React, { startTransition } from 'react'
import { Button } from '@mui/material'
import { useAppDispatch } from 'src/Hooks'
import { toggleTheme } from 'src/Redux/Reducers/themeSlice'
import { Link, useNavigate } from 'react-router-dom'
import { getProducts, getUsers } from 'src/Redux/Actions/UserAction'

const HomePage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <>
      <h1>HomePage</h1>
      <Button onClick={() => dispatch(toggleTheme())}>Toggle Theme</Button>
      <Button onClick={() => dispatch(getProducts())}>products</Button>
      <Link to="/login">Go to login</Link>
      <Button onClick={() => startTransition(() => navigate('/login'))}>
        Login
      </Button>
      <Button onClick={() => getUsers()}>
        get users
      </Button>
      <Button onClick={() => navigate('/dashboard')}>
        dashboard page (private route)
      </Button>
      <Button onClick={() => navigate('/chat')}>
        chat app (private route)
      </Button>
    </>
  )
}

export default HomePage
