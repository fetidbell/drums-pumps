import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Note } from './Note';
import {
  Container,
  Signboard,
  Name,
  Icon,
  Controls,
  ControlButton,
  Notes,
} from './styles';
import { getInstrumentNotes, getTrackSoloState, getTrackMuteState } from '../../model/selectors';
import { toggleTrackMuteness, toggleTrackSolo } from '../../model/slices';
import PlaybackController from '../../utils/playback';

export const Track = ({ instrument }) => {
  const notes = useSelector(getInstrumentNotes(instrument));
  const isSoloed = useSelector(getTrackSoloState(instrument));
  const isMuted = useSelector(getTrackMuteState(instrument));
  const dispatch = useDispatch();

  const onMute = () => {
    dispatch(toggleTrackMuteness({ instrument }));
    PlaybackController.toggleMute(instrument);
  };

  const onSolo = () => {
    dispatch(toggleTrackSolo({ instrument }));
    PlaybackController.toggleSolo(instrument);
  };

  return (
    <Container>
      <Signboard>
        <Name>{instrument}</Name>
        <Icon instrument={instrument} />
      </Signboard>
      <Controls>
        <ControlButton
          type="button"
          alt="mute"
          isPushed={isMuted}
          onClick={onMute}
        >
          M
        </ControlButton>
        <ControlButton
          type="button"
          alt="solo"
          isPushed={isSoloed}
          onClick={onSolo}
        >
          S
        </ControlButton>
      </Controls>
      <Notes>
        {notes.map((note, index) => (
          <Note
            key={index}
            instrument={note.instrument}
            noteIndex={index}
            isMuted={isMuted}
          />
        ))}
      </Notes>
    </Container>
  );
};
