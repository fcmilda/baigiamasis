import React, { useContext } from 'react';
import { Button, Container } from '@mui/material';
import SectionTitle from '../components/sectiontitle';
import AuthContext from '../features/auth/auth-context';

const AdminPage: React.FC = () => {
  const { logout, user } = useContext(AuthContext);

  return (
    <Container sx={{ my: 5, textAlign: 'center' }}>
      <SectionTitle title="Admin Page" description={`Labas, ${user?.email}`} />
      <Button variant="contained" onClick={logout}>Atsijungti</Button>
    </Container>
  );
};

export default AdminPage;
