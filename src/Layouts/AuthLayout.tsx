import React, { Suspense, useEffect } from 'react'
import { NavigateFunction, Outlet, useNavigate } from 'react-router'
import LoadingSpinner from 'src/Components/Common/LoadingSpinner'
import { useAppSelector } from 'src/Hooks'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const AuthLayout: React.FC = () => {
  const { isLogin } = useAppSelector((state) => state.auth)
  const navigate: NavigateFunction = useNavigate()

  if (isLogin) {
    navigate('/dashboard', { replace: true });
    return (
      <Box className="message-alert">
        <Typography>You are already logged in</Typography>
        <Button component={Link} to={'/'}>BACK TO HOME</Button>
      </Box>
    );
  }

  return (
    <div>
      <main>
        {/* <Suspense fallback={<LoadingSpinner open={true} />}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </div>
  )
}

export default AuthLayout
