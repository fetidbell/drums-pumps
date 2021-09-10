import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Pad } from './styles';
import { getNoteActivity } from '../../../model/selectors';
import { toggleNoteActivity } from '../../../model/slices';
import PlaybackController from '../../../utils/playback';

export const Note = ({ instrument, noteIndex, isMuted }) => {
  const isPushed = useSelector(getNoteActivity(instrument, noteIndex));

  const dispatch = useDispatch();

  const onPush = () => {
    dispatch(toggleNoteActivity({
      instrument,
      noteIndex,
    }));
    PlaybackController.toggleNoteActivity(instrument, noteIndex);
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
