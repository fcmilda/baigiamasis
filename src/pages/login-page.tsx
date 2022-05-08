import React, { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Container, Paper, Box, Button, TextField, Alert,
} from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SectionTitle from '../components/sectiontitle';
import AuthContext from '../features/auth/auth-context';

const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { error, clearError } = useContext(AuthContext);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const nextPage = searchParams.get('next') ?? '/admin';
    login({ email, password }, nextPage);
  };

  return (
    <Container sx={{ my: 5 }}>
      <SectionTitle title="Prisijungimas" description="Prisijungti prie TVS" />
      {error && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Alert
            sx={{
              position: 'absolute',
              mt: 3,
            }}
            color="error"
            onClose={clearError}
          >
            {error}
          </Alert>
        </Box>
      )}
      <Paper
        component="form"
        elevation={3}
        sx={{
          display: 'flex',
          mx: 'auto',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          p: 3,
          width: 400,
        }}
        onSubmit={handleSubmit}
      >
        <VpnKeyIcon color="primary" sx={{ fontSize: 45 }} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 1 / 1,
          my: 2,
        }}
        >
          <TextField
            type="email"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button variant="contained" size="large" type="submit">Prisijungti</Button>
        <Button href="/auth/register" variant="contained" size="small" type="submit">Registruotis</Button>
      </Paper>

    </Container>
  );
};

export default LoginPage;
