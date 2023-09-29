import React from 'react';
import { Container, Typography } from '@mui/material';
import { LoginForm } from 'src/Features/Login';
import { useAppSelector } from 'src/Hooks';
import CircularLoader from 'src/Components/Common/CircularLoader';

const LoginPage: React.FC = () => {
  const { loading, userInfo, error } = useAppSelector((state) => state.auth)

  return (
    <>
      {
        !loading ?
          <Container maxWidth="xs" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }
          } >
            <div>
              <Typography variant="h5">Login</Typography>
            </div>
            <LoginForm />
          </Container >
          : <CircularLoader />
      }
    </>
  );
};

export default LoginPage;
