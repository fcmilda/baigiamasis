import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFormik, FormikConfig } from 'formik';
import * as Yup from 'yup';
import {
  Container, TextField,
} from '@mui/material';
import AuthForm from 'components/authform';
import SectionTitle from '../components/sectiontitle';
import AuthContext from '../features/auth/auth-context';

type LoginValues = {
  email: string,
  password: string,
};

type LoginFormikConfig = FormikConfig<LoginValues>;

const initialValues: LoginValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required('El. paštas yra privalomas')
    .min(6, 'Mažiausiai 6 simboliai')
    .email('Netinkamas el. pašto formatas'),
  password: Yup.string()
    .required('Slaptažodis yra privalomas')
    .min(8, 'Mažiausiai 8 simboliai')
    .max(32, 'Daugiausiai 32 simboliai')
    .matches(/[A-Z]/, 'Bent viena didžioji raidė privaloma')
    .matches(/[a-z]/, 'Bent viena mažoji raidė privaloma')
    .matches(/\d/, 'Skaičius yra privalomas'),
});

const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { login, loading } = useContext(AuthContext);

  const handleLogin: LoginFormikConfig['onSubmit'] = ({ email, password }) => {
    const nextPage = searchParams.get('next') ?? '/admin';
    login({ email, password }, nextPage);
  };

  const {
    values,
    touched,
    errors,
    dirty,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<LoginValues>({
    initialValues,
    onSubmit: handleLogin,
    validationSchema,
  });

  return (
    <Container sx={{ my: 5 }}>
      <SectionTitle title="Prisijungimas" description="Prisijungti prie TVS" />
      <AuthForm
        btnActive={dirty && isValid}
        onSubmit={handleSubmit}
      >
        <TextField
          name="email"
          type="email"
          label="Email"
          fullWidth
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          disabled={loading}
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          fullWidth
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          disabled={loading}
        />
      </AuthForm>
    </Container>
  );
};

export default LoginPage;
