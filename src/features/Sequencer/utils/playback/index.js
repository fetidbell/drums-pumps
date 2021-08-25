import * as Tone from 'tone';
import kickUrl from '~assets/sounds/kick.mp3';
import snareUrl from '~assets/sounds/snare.mp3';
import hihatUrl from '~assets/sounds/hihat.mp3';
import { blazeNotes, unblazeNotes } from '../animation';
import setInitialNotes from './initial';

// Темп воспроизведения, выражается в BPM - beats per minute
Tone.Transport.bpm.value = 80;

// sequencerGridLength - длина сетки секвенсора
// sequencerGrid - сетка секвенсора
const sequencerGridLength = 16;
const sequencerGrid = [...new Array(sequencerGridLength)].map(
  (_, index) => index,
);

// Ноты инструментов
const notes = setInitialNotes();

// Загрузка семплов в аудио-буфер
const kickBuffer = new Tone.ToneAudioBuffer(kickUrl);
const snareBuffer = new Tone.ToneAudioBuffer(snareUrl);
const hihatBuffer = new Tone.ToneAudioBuffer(hihatUrl);

// Сэмплер, через него осуществляется управление инструментами
const sampler = new Tone.Players({
  urls: {
    kick: kickBuffer,
    snare: snareBuffer,
    hihat: hihatBuffer,
  },
});

/* Каналы необходимы для:
 * 1) вывода звука в мастер-канал
 * 2) управления громкостью, стерео, мьютом и соло
*/
const channels = {
  kick: new Tone.Channel(0).toDestination(),
  snare: new Tone.Channel(0).toDestination(),
  hihat: new Tone.Channel(0).toDestination(),
};

// Соединяем инструмент с соответствующим каналом
sampler.player('kick').connect(channels.kick);
sampler.player('snare').connect(channels.snare);
sampler.player('hihat').connect(channels.hihat);

/* Функция, непосредственно проигрывающая секвенцию
 * time - глобальное время Tone.Transport, передается при запуске секвенсора;
 * noteIndex - порядковый номер ноты из сетки секвенсора
*/
const playSequence = (time, noteIndex) => {
  blazeNotes(noteIndex);
  Object.keys(notes).forEach((instrument) => {
    const note = notes[instrument][noteIndex];
    if (note.isActive && !channels[instrument].muted) {
      sampler.player(instrument).start(time);
    }
  });
};

/* Секвенция размером в один такт 16/16, (по сути это такт 4/4, разделенный на шестнадцатые);
 * playSequence - коллбек, который будет вызыван на каждый шаг по сетке;
 * sequencerSubdivision - размер сетки, выраженный в длине нот:
 *                        4n - четверти, 8n - восьмые, 16n - шестнадцатые и т.д.;
*/
const sequencerSubdivision = '16n';
const sequencer = new Tone.Sequence(
  playSequence,
  sequencerGrid,
  sequencerSubdivision,
);

// Функция запускает проигрывание
const onStart = () => {
  Tone.start();
  Tone.Transport.start();
  sequencer.start();
};

// Функция останавливает проигрывание
const onStop = () => {
  unblazeNotes();
  Tone.Transport.stop();
  sequencer.stop();
};

// Функция меняет значение Note.isActive на противоположное
const toggleNoteActivity = (instrument, noteIndex) => {
  notes[instrument][noteIndex].toggle();
};

// Функция для изменения темпа
const setTempo = value => {
  Tone.Transport.bpm.value = value;
};

// Функция устанавливает всем нотам неактивное состояние
const resetNotes = () => {
  Object.keys(notes).forEach((instrument) => {
    notes[instrument].forEach(note => note.off());
  });
};

// Функция изменяет значение громкости канала
/* FIXME: если замьютить канал, и потом изменить его громкость
 * то канал перестает быть замьюченым и начинает проигрывать звук.
 * Решение:
 * 1) вынести значения громкости каналов в отдельный объект
 * 2) значение громкости канала менять в этом объекте
 * 3) при toggleMute подтягивать значение громкости из объекта
 *
*/
const setChannelVolume = (instrument, level) => {
  const channel = channels[instrument];
  channel.volume.value = level;
};

// Функция управляет mute'ом канала
const toggleMute = instrument => {
  channels[instrument].mute = !channels[instrument].muted;
};

// Функция управляет солированием канала
const toggleSolo = instrument => {
  channels[instrument].solo = !channels[instrument].solo;
};

const PlaybackController = {
  onStart,
  onStop,
  toggleNoteActivity,
  setTempo,
  resetNotes,
  setChannelVolume,
  toggleMute,
  toggleSolo,
};

export default PlaybackController;
