import React from 'react';
import { Container } from './styles';
import { Transport } from '../Transport';
import { Grid } from '../Grid';

export const Wrapper = () => (
  <Container>
    <Transport />
    <Grid />
  </Container>
);
