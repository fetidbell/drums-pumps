import { createSlice } from '@reduxjs/toolkit';
import { createInitialState } from './initialState';

const initialState = createInitialState();

export const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState,
  reducers: {
    toggleNoteActivity(state, action) {
      const { instrumentName, noteIndex } = action.payload;
      const instrumentToChangeNotes = state.notes[instrumentName];
      instrumentToChangeNotes[noteIndex].isActive = !instrumentToChangeNotes[noteIndex].isActive;
      state.notes[instrumentName] = instrumentToChangeNotes;
    },
    toggleNoteMuteness(state, action) {
      const { instrumentName } = action.payload;
      const instrumentToChangeNotes = state.notes[instrumentName];
      state.notes[instrumentName] = instrumentToChangeNotes.map((note) => (
        {
          ...note,
          isMuted: !note.isMuted,
        }
      ));
    },
    resetNotesAction(state) {
      Object.keys(state.notes).forEach((instrument) => {
        state.notes[instrument] = state.notes[instrument].map((note) => (
          {
            ...note,
            isActive: false,
          }
        ));
      });
    },
  },
});

export const { toggleNoteActivity, toggleNoteMuteness, resetNotesAction } = sequencerSlice.actions;
