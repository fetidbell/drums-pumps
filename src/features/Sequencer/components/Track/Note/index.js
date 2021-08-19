import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Pad } from './styles';
import { getNoteActivity, getNoteMuteness } from '../../../model/selectors';

export const Note = ({ instrumentName, noteIndex }) => {
  const isPushed = useSelector(getNoteActivity(instrumentName, noteIndex));
  const isMuted = useSelector(getNoteMuteness(instrumentName, noteIndex));

  return (
    <Container>
      <Pad isPushed={isPushed} isMuted={isMuted} />
    </Container>
  );
};
