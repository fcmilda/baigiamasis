import React from 'react';
import {
  Typography, Container, Box, TextField, Button,
} from '@mui/material';
import SectionTitle from '../components/sectiontitle/index';

const ContactsPage: React.FC = () => (
  <Container sx={{ my: 5 }}>
    <SectionTitle title="Kontaktai" description="Čia yra kontaktų forma susisiekti." />

    <Box>
      <TextField sx={{ mb: 5, mr: 2 }} id="name" label="Jūsų vardas" variant="outlined" required type="text" />
      <TextField sx={{ mb: 5 }} id="email" label="El. paštas" variant="outlined" required type="email" />
    </Box>
    <Box>
      <TextField sx={{ width: '435px', mb: 5 }} id="message" label="Žinutė" variant="outlined" required />
    </Box>
    <Box>
      <Button variant="contained" size="large" sx={{ boxShadow: '0' }}>Siųsti</Button>
    </Box>

  </Container>
);

export default ContactsPage;
