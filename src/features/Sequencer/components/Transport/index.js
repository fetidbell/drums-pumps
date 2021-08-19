import React from 'react';
import {
  Container,
  ControlPanel,
  PlaybackButtons,
  Play,
  Stop,
  Reset,
  TempoSlider,
} from './styles';

export const Transport = () => (
  <Container>
    <ControlPanel>
      <PlaybackButtons>
        <Play type="button" alt="play" />
        <Stop type="button" alt="stop" />
        <Reset type="button" alt="reset" />
      </PlaybackButtons>
      <TempoSlider />
    </ControlPanel>
  </Container>
);
