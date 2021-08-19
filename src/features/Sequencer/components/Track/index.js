import React from 'react';
import { useSelector } from 'react-redux';
import { Note } from './Note';
import {
  Container,
  Signboard,
  Name,
  Icon,
  Controls,
  Mute,
  Solo,
  Notes,
} from './styles';
import { getSequencerGrid } from '../../model/selectors';

export const Track = ({ instrumentName }) => {
  const sequencerGrid = useSelector(getSequencerGrid);

  return (
    <Container>
      <Signboard>
        <Name>{instrumentName}</Name>
        <Icon />
      </Signboard>
      <Controls>
        <Mute type="button" alt="mute">M</Mute>
        <Solo type="button" alt="solo">S</Solo>
      </Controls>
      <Notes>
        {sequencerGrid.map((_, index) => (
          <Note key={index} instrumentName={instrumentName} noteIndex={index} />
        ))}
      </Notes>
    </Container>
  );
};
