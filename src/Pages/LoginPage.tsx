import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Container } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

interface FormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (values: FormValues) => {
    console.log('Form submitted with values:', values);
    // You can add your authentication logic here
  };

  return (
    <Container maxWidth="xs">
      <div>
        <AccountCircle fontSize="large" />
        <Typography variant="h5">Login</Typography>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            as={TextField}
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            helperText={<ErrorMessage name="email" />}
          />
          <Field
            as={TextField}
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            fullWidth
            margin="normal"
            helperText={<ErrorMessage name="password" />}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            style={{ marginTop: '16px' }}
          >
            Login
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default LoginPage;
