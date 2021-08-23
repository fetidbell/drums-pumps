import React from 'react';
import { Container } from './styles';
import { Transport } from '../Transport';
import { Grid } from '../Grid';
import { Mixer } from '../Mixer';

export const Wrapper = () => (
  <Container>
    <Transport />
    <Grid />
    <Mixer />
  </Container>
);
