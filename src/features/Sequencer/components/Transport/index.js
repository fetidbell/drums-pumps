import React, { useState } from 'react';
import {
  Container,
  ControlPanel,
  PlaybackButtons,
  Play,
  Stop,
  Reset,
} from './styles';
import { TempoSlider } from './TempoSlider';
import { onStart, onStop } from '../../utils/playback';

export const Transport = () => {
  const [isPlayToggled, setIsPlayToggled] = useState(false);

  const togglePlay = () => {
    setIsPlayToggled(true);
    onStart();
  };

  const toggleStop = () => {
    setIsPlayToggled(false);
    onStop();
  };

  return (
    <Container>
      <ControlPanel>
        <PlaybackButtons>
          <Play type="button" alt="play" isToggled={isPlayToggled} onClick={togglePlay} />
          <Stop type="button" alt="stop" onClick={toggleStop} />
          <Reset type="button" alt="reset" />
        </PlaybackButtons>
        <TempoSlider />
      </ControlPanel>
    </Container>
  );
};
