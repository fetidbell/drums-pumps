import React from 'react';
import { useSelector } from 'react-redux';
import { Track } from '../Track';
import { Container } from './styles';
import { getInstrumentsNames } from '../../model/selectors';

export const Grid = () => {
  const instrumentsNames = useSelector(getInstrumentsNames());
  return (
    <Container>
      {instrumentsNames.map((name, index) => <Track instrument={name} key={index} />)}
    </Container>
  );
};
