import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { getInstrumentNotes } from '../../model/selectors';
import { toggleNoteMuteness } from '../../model/slices';
import PlaybackController from '../../utils/playback';

export const Track = ({ instrumentName }) => {
  const notes = useSelector(getInstrumentNotes(instrumentName));
  const dispatch = useDispatch();

  const onMute = () => {
    dispatch(toggleNoteMuteness({ instrumentName }));
    PlaybackController.toggleMute(instrumentName);
  };

  return (
    <Container>
      <Signboard>
        <Name>{instrumentName}</Name>
        <Icon instrument={instrumentName} />
      </Signboard>
      <Controls>
        <Mute type="button" alt="mute" onClick={onMute}>M</Mute>
        <Solo type="button" alt="solo">S</Solo>
      </Controls>
      <Notes>
        {notes.map((note, index) => (
          <Note
            key={index}
            instrumentName={note.instrumentName}
            noteIndex={index}
            isMuted={note.isMuted}
          />
        ))}
      </Notes>
    </Container>
  );
};
