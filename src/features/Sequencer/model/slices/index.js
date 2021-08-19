import { createSlice } from '@reduxjs/toolkit';

const sequencerGridLength = 16;
const instruments = ['kick', 'snare', 'hihat'];
const instrumentsAndNotes = {};

class Note {
  constructor(instrumentName, isActive, isMuted) {
    this.instrumentName = instrumentName;
    this.isActive = isActive;
    this.isMuted = isMuted;
  }
}

// Зададим начальный грув
instruments.forEach((instrument) => {
  const instrumentNotes = [...new Array(sequencerGridLength)].map(() => (
    new Note(instrument, false, false)
  ));
  switch (instrument) {
    case 'kick':
      instrumentNotes[0].isActive = true;
      instrumentNotes[8].isActive = true;
      instrumentNotes[10].isActive = true;
      break;
    case 'snare':
      instrumentNotes[4].isActive = true;
      instrumentNotes[12].isActive = true;
      break;
    case 'hihat':
      instrumentNotes.forEach((_, index) => {
        instrumentNotes[index].isActive = (index % 2 === 0);
      }, instrumentNotes);
      break;
    default:
      break;
  }
  instrumentsAndNotes[instrument] = instrumentNotes;
});

const initialState = {
  sequencerGrid: [...new Array(sequencerGridLength)].map(
    (_, index) => index,
  ),
  instrumentsAndNotes,
};

export const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState,
  reducers: {
    toggleNote(state, action) {
      const { instrumentToChange, noteIndex } = action.payload;
      const instrumentToChangeNotes = state.instrumentsAndNotes[instrumentToChange];
      instrumentToChangeNotes[noteIndex].isActive = !instrumentToChangeNotes[noteIndex].isActive;
      state.instrumentsAndNotes[instrumentToChange] = instrumentToChangeNotes;
    },
  },
});
