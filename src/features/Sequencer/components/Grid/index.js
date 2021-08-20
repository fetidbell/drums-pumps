import React from 'react';
import { useSelector } from 'react-redux';
import { Track } from '../Track';
import { Container } from './styles';
import { getInstrumentsNames } from '../../model/selectors';

export const Grid = () => {
  const instruments = useSelector(getInstrumentsNames());
  return (
    <Container>
      {instruments.map((instrument, index) => <Track instrumentName={instrument} key={index} />)}
    </Container>
  );
};
