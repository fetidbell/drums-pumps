import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  ControlPanel,
  PlaybackButtons,
  Play,
  Stop,
  Reset,
} from './styles';
import { TempoSlider } from './TempoSlider';
import PlaybackController from '../../utils/playback';
import { resetNotesAction } from '../../model/slices';

export const Transport = () => {
  const [isPlayToggled, setIsPlayToggled] = useState(false);
  const dispatch = useDispatch();

  const togglePlay = () => {
    setIsPlayToggled(true);
    PlaybackController.onStart();
  };

  const toggleStop = () => {
    setIsPlayToggled(false);
    PlaybackController.onStop();
  };

  const onReset = () => {
    dispatch(resetNotesAction());
    PlaybackController.resetNotes();
  };

  return (
    <Container>
      <ControlPanel>
        <PlaybackButtons>
          <Play type="button" alt="play" isToggled={isPlayToggled} onClick={togglePlay} />
          <Stop type="button" alt="stop" onClick={toggleStop} />
          <Reset type="button" alt="reset" onClick={onReset} />
        </PlaybackButtons>
        <TempoSlider />
      </ControlPanel>
    </Container>
  );
};
