import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Pad } from './styles';
import { getNoteActivity } from '../../../model/selectors';
import { toggleNoteActivity } from '../../../model/slices';
import PlaybackController from '../../../utils/playback';

export const Note = ({ instrumentName, noteIndex, isMuted }) => {
  const isPushed = useSelector(getNoteActivity(instrumentName, noteIndex));

  const dispatch = useDispatch();

  const onPush = () => {
    dispatch(toggleNoteActivity({
      instrumentName,
      noteIndex,
    }));
    PlaybackController.toggleNoteActivity(instrumentName, noteIndex);
  };

  return (
    <Container>
      <Pad
        type="button"
        alt="note pad"
        isPushed={isPushed}
        isMuted={isMuted}
        onClick={onPush}
        data-note-number={String(noteIndex)}
      />
    </Container>
  );
};
