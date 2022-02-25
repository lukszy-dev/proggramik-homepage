import { NextPage } from 'next';
import { Container } from '@mui/material';

import Header from '../components/Header';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

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
      <Footer />
    </Container>
  </>
);

export default Index;
