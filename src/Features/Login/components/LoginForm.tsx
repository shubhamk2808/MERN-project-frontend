import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import Button from 'src/Components/Common/Button';

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
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
  };

  return (
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
  );
};

export default LoginForm;
