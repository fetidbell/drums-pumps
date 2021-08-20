import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Pad } from './styles';
import { getNoteActivity } from '../../../model/selectors';
import { toggleNoteActivity } from '../../../model/slices';
import { setNotes } from '../../../utils/playback';

export const Note = ({ instrumentName, noteIndex, isMuted }) => {
  const isPushed = useSelector(getNoteActivity(instrumentName, noteIndex));
  // const isMuted = useSelector(getNoteMuteness(instrumentName, noteIndex));

  const dispatch = useDispatch();

  const onPush = () => {
    dispatch(toggleNoteActivity({
      instrumentName,
      noteIndex,
    }));
  };

  useEffect(() => {
    setNotes();
  }, [isPushed]);

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
