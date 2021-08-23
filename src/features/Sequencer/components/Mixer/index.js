import React from 'react';
import { useSelector } from 'react-redux';
import { getInstrumentsNames } from '../../model/selectors';
import { Strip } from './Strip';
import { Container } from './styles';

export const Mixer = () => {
  const instruments = useSelector(getInstrumentsNames());

  return (
    <Container>
      {instruments.map((instrument, index) => (
        <Strip instrumentName={instrument} key={index} />
      ))}
    </Container>
  );
};
