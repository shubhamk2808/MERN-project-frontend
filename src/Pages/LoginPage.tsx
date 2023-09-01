// Pages/LoginPage.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import { LoginForm } from 'src/Features/Login';

const LoginPage: React.FC = () => {
  return (
    <Container maxWidth="xs" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <div>
        <Typography variant="h5">Login</Typography>
      </div>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
