import { NextPage } from 'next';
import { Container } from '@mui/material';

import Header from '../components/Layout/Header';
import Projects from '../components/Layout/Projects';
import Hero from '../components/Layout/Hero';

const Index: NextPage = () => (
  <>
    <Header />
    <Container
      maxWidth="sm"
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Hero />
      <Projects />
    </Container>
  </>
);

export default Index;
