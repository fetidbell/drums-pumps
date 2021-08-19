import React from 'react';
import { useSelector } from 'react-redux';
import { Track } from '../components/Track';
import { Container } from './styles';
import { getInstrumentsNames } from '../model/selectors';

export const Grid = () => {
  const instruments = useSelector(getInstrumentsNames());
  return (
    <Container>
      {instruments.map(instrument => <Track instrumentName={instrument} />)}
    </Container>
  );
};
