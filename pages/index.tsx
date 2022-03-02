import { NextPage } from 'next';
import { Container } from '@mui/material';

import Header from '../components/Header';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Experience from '../components/Experience';

const Index: NextPage = () => (
  <>
    <Header />
    <Container
      maxWidth='md'
      sx={{
        paddingTop: '90px',
        marginBottom: 4,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </Container>
  </>
);

export default Index;
