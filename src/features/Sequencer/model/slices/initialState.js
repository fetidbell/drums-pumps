function Note(instrument, isActive, isMuted) {
  return {
    instrumentName: instrument,
    isActive,
    isMuted,
  };
}

export const createInitialState = () => {
  const sequencerGridLength = 16;
  const instruments = ['kick', 'snare', 'hihat'];
  const notes = {};

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
    notes[instrument] = instrumentNotes;
  });

  return {
    sequencerGrid: [...new Array(sequencerGridLength)].map(
      (_, index) => index,
    ),
    notes,
  };
};
