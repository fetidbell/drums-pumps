export const getNoteActivity = (instrumentName, noteIndex) => ({ sequencer }) => {
  const instrument = sequencer.notes[instrumentName];
  return instrument[noteIndex].isActive;
};

export const getNoteMuteness = (instrumentName, noteIndex) => ({ sequencer }) => {
  const instrument = sequencer.notes[instrumentName];
  return instrument[noteIndex].isMuted;
};

export const getInstrumentsNames = () => ({ sequencer }) => {
  const names = Object.keys(sequencer.notes).map(instrument => instrument);
  return names;
};

export const getInstrumentNotes = (instrumentName) => ({ sequencer }) => (
  sequencer.notes[instrumentName]
);
