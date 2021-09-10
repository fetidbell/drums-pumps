function Track(name, notes, isMuted, isSoloed) {
  return {
    name,
    notes,
    isMuted,
    isSoloed,
  };
}

function Note(instrument, isActive) {
  return {
    instrument,
    isActive,
  };
}

/*
 * instruments = {
   kick: {
     notes: [
       Note {'kick', false, false},
       Note {'kick', false, false},
       Note {'kick', false, false},
       Note {'kick', false, false}
     ],
     isMuted: false,
     isSoloed: false
   },
   snare: {
     notes: [
       Note {'snare', false, false},
       Note {'snare', false, false},
       Note {'snare', false, false},
       Note {'snare', false, false}
     ],
     isMuted: false,
     isSoloed: false
   },
   hihat: {
     notes: [
       Note {'hihat', false, false},
       Note {'hihat', false, false},
       Note {'hihat', false, false},
       Note {'hihat', false, false}
     ],
     isMuted: false,
     isSoloed: false
   },
 }
*/

export const createInitialState = () => {
  const sequencerGridLength = 16;
  const instruments = {
    kick: new Track('kick', [], false, false),
    snare: new Track('snare', [], false, false),
    hihat: new Track('hihat', [], false, false),
  };

  // Зададим начальный грув
  Object.keys(instruments).forEach((instrument) => {
    const initialNotes = [...new Array(sequencerGridLength)].map(() => (
      new Note(instrument, false)
    ));

    switch (instrument) {
      case 'kick':
        initialNotes[0].isActive = true;
        initialNotes[8].isActive = true;
        initialNotes[10].isActive = true;
        break;
      case 'snare':
        initialNotes[4].isActive = true;
        initialNotes[12].isActive = true;
        break;
      case 'hihat':
        initialNotes.forEach((_, index) => {
          initialNotes[index].isActive = (index % 2 === 0);
        }, initialNotes);
        break;
      default:
        break;
    }

    instruments[instrument].notes = initialNotes;
  });

  return {
    sequencerGrid: [...new Array(sequencerGridLength)].map(
      (_, index) => index,
    ),
    instruments,
  };
};
