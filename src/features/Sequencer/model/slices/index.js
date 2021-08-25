import { createSlice } from '@reduxjs/toolkit';
import { createInitialState } from './initialState';

const initialState = createInitialState();

export const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState,
  reducers: {
    toggleNoteActivity(state, action) {
      const { instrumentName, noteIndex } = action.payload;
      const notes = state.notes[instrumentName];
      notes[noteIndex].isActive = !notes[noteIndex].isActive;
    },
    toggleNoteMuteness(state, action) {
      const { instrumentName } = action.payload;
      const notes = state.notes[instrumentName];
      notes.forEach(note => { note.isMuted = !note.isMuted; }, notes);
    },
    resetNotesAction(state) {
      Object.keys(state.notes).forEach((instrument) => {
        const notes = state.notes[instrument];
        notes.forEach(note => { note.isActive = false; }, notes);
      });
    },
  },
});

export const { toggleNoteActivity, toggleNoteMuteness, resetNotesAction } = sequencerSlice.actions;
