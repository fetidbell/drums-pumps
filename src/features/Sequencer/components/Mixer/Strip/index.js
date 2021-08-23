import React, { useState } from 'react';
import PlaybackController from '../../../utils/playback';
import {
  Container, Title, Fader, Output,
} from './styles';

export const Strip = ({ instrumentName }) => {
  const [level, setLevel] = useState(0);

  const onLevelChange = (e) => {
    setLevel(e.target.value);
    PlaybackController.setChannelVolume(instrumentName, e.target.value);
  };

  return (
    <Container>
      <Title>{instrumentName}</Title>
      <Fader
        type="range"
        min={-18}
        max={4}
        value={level}
        onChange={onLevelChange}
      />
      <Output value={level}>
        {level}
        {' db'}
      </Output>
    </Container>
  );
};
