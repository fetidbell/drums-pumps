export const getNoteActivity = (instrument, noteIndex) => ({ sequencer }) => {
  const instrumentNotes = sequencer.instruments[instrument].notes;
  return instrumentNotes[noteIndex].isActive;
};

export const getNoteMuteness = (instrument) => ({ sequencer }) => (
  sequencer.instruments[instrument].isMuted
);

export const getInstrumentsNames = () => ({ sequencer }) => (
  Object.values(sequencer.instruments).map(({ name }) => name)
);

export const getInstrumentNotes = (instrument) => ({ sequencer }) => (
  sequencer.instruments[instrument].notes
);

export const getTrackSoloState = (instrument) => ({ sequencer }) => (
  sequencer.instruments[instrument].isSoloed
);

export const getTrackMuteState = (instrument) => ({ sequencer }) => (
  sequencer.instruments[instrument].isMuted
);
