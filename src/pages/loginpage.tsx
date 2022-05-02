import React, { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Container, Paper, Box, Button, TextField,
} from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SectionTitle from '../components/sectiontitle';
import AuthContext from '../features/auth/auth-context';

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <Container sx={{ my: 5 }}>
      <SectionTitle title="Prisijungimas" description="Prisijungti prie TVS" />

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
      </Paper>

    </Container>
  );
};

export default LoginPage;
