import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import Button from 'src/Components/Common/Button';
import { loginRequest } from 'src/Redux/Actions/AuthAction';
import { useAppDispatch, useAppSelector } from 'src/Hooks';
import { useNavigate } from 'react-router';

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, userInfo, error } = useAppSelector((state) => state.auth)
  const payload = useAppSelector((state) => state.auth)
  console.log({ payload })
  const initialValues: FormValues = {
    email: 'kminchellew',
    password: '0lelplR',
  };

  const validationSchema = Yup.object({
    // email: Yup.string().email('Invalid email address').required('Required'),
    // password: Yup.string().required('Required'),
  });

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const handleSubmit = async (values: FormValues) => {
    console.log('Form submitted with values:', values);
    dispatch(loginRequest(values))
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik: FormikProps<FormValues>) => (
        < Form >
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
            disabled={!formik.isValid}
          >
            Login
          </Button>
        </Form>
      )
      }
    </Formik>
  );
};

export default LoginForm;
