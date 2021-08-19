export const getNoteActivity = (instrumentName, noteIndex) => ({ sequencer }) => {
  const instrument = sequencer.instrumentsAndNotes[instrumentName];
  return instrument[noteIndex].isActive;
};

export const getNoteMuteness = (instrumentName, noteIndex) => ({ sequencer }) => {
  const instrument = sequencer.instrumentsAndNotes[instrumentName];
  return instrument[noteIndex].isMuted;
};

export const getInstrumentsNames = () => ({ sequencer }) => {
  const names = Object.keys(sequencer.instrumentsAndNotes).map(instrument => instrument);
  return names;
};

export const getSequencerGrid = ({ sequencer }) => sequencer.sequencerGrid;
