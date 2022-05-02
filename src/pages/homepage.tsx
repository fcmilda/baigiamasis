import React from 'react';
import {
  Typography, Container, Box, styled, Button,
} from '@mui/material';
import SectionTitle from '../components/sectiontitle';

const loremipsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quidem expedita, reiciendis officiis aut dolorum temporibus magnam facere voluptates veniam amet quos vero velit? Corporis culpa ad magnam excepturi earum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus esse autem itaque laborum, magnam nulla atque reprehenderit error eligendi corrupti. Laboriosam, exercitationem. Quasi sapiente error omnis nihil alias, inventore modi.';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.manoSpalva.light,
  backgroundColor: theme.palette.manoSpalva.dark,
  padding: theme.spacing(0, 2),

}));

const HomePage: React.FC = () => (
  <Container sx={{ my: 5 }}>

    {/* <img src="./assets/logo2.svg" alt="" /> */}
    <SectionTitle title="Kepyklos puslapis" description="Kepykla įsikūrusi 2023 m. Vilniuje" />

    <Box component="section" sx={(theme) => theme.mixins.section}>
      <img src="../assets/bread.png" alt="Bread" style={{ width: '250px' }} />
      <Typography component="p" sx={{ color: 'manoSpalva.dark' }}>{loremipsum}</Typography>
    </Box>
    <StyledButton variant="outlined">Skaityti daugiau</StyledButton>

    <Box component="section" sx={(theme) => theme.mixins.section}>
      <Typography component="p" sx={{ color: 'manoSpalva.main' }}>{loremipsum}</Typography>
      <img src="../assets/baguette.png" alt="" style={{ width: '250px' }} />
    </Box>
  </Container>
);

export default HomePage;
