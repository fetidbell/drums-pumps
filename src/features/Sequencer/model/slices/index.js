import { createSlice } from '@reduxjs/toolkit';
import { createInitialState } from './initialState';

const initialState = createInitialState();

export const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState,
  reducers: {
    toggleNoteActivity(state, action) {
      const { instrument, noteIndex } = action.payload;
      const { notes } = state.instruments[instrument];
      notes[noteIndex].isActive = !notes[noteIndex].isActive;
    },

    toggleTrackMuteness(state, action) {
      const affectedInstrument = state.instruments[action.payload.instrument];
      affectedInstrument.isMuted = !affectedInstrument.isMuted;
    },

    resetNotesAction(state) {
      Object.keys(state.instruments).forEach((instrument) => {
        const { notes } = state.instruments[instrument];
        notes.forEach(note => { note.isActive = false; }, notes);
      });
    },

    toggleTrackSolo(state, action) {
      const affectedInstrument = state.instruments[action.payload.instrument];
      affectedInstrument.isSoloed = !affectedInstrument.isSoloed;
    },
  },
});

export const {
  toggleNoteActivity, toggleTrackMuteness, resetNotesAction, toggleTrackSolo,
} = sequencerSlice.actions;
