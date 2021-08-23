import Note from './Note';

const setInitialNotes = () => {
  const sequencerGridLength = 16;
  const instruments = ['kick', 'snare', 'hihat'];
  const notes = {};

  /* Зададим начальный грув, выставив активность нот:
    kick отыгрывает на первую, третью ( + восьмую третьей) доли
    snare отыгрывает на вторую и четвертую доли
    hihat отыгрывает на каждую восьмую доли
  */
  instruments.forEach((instrument) => {
    const instrumentNotes = [...new Array(sequencerGridLength)].map(() => (
      new Note(instrument, false)
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

  return notes;
};

export default setInitialNotes;
