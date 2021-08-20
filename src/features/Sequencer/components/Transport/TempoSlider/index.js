import React, { useState } from 'react';
import { Container, Slider, Value } from './styles';
import { setTempo } from '../../../utils/playback';

export const TempoSlider = () => {
  const [tempo, setTempoValue] = useState(80);

  const onTempoChange = (e) => {
    setTempoValue(e.target.value);
    setTempo(Math.round(e.target.value));
  };

  return (
    <Container>
      <Slider
        type="range"
        min={50}
        max={180}
        value={tempo}
        onChange={onTempoChange}
      />
      <Value>
        {`Tempo: ${Math.round(tempo)}`}
      </Value>
    </Container>
  );
};
