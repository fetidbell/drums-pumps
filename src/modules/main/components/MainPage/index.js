import React from 'react';
import { Header } from '../Header';
import { Sequencer } from '~features/Sequencer';
import { Container } from '../Container';
import { Footer } from '../Footer';

export const MainPage = () => (
  <Container>
    <Header />
    <Sequencer />
    <Footer />
  </Container>
);
