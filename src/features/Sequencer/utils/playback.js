import * as Tone from 'tone';
import kickUrl from '~assets/sounds/kick.mp3';
import snareUrl from '~assets/sounds/snare.mp3';
import hihatUrl from '~assets/sounds/hihat.mp3';
import { store } from '~model/store';
import { blazeNotes, unblazeNotes } from './animation';

const sequencerSlice = store.getState().sequencer;

// sequencerGrid - сетка секвенсора
// notes - ноты инструментов
const { sequencerGrid } = sequencerSlice;
let notes = {};

// Загрузка семплов в аудио-буфер
const kickBuffer = new Tone.ToneAudioBuffer(kickUrl);
const snareBuffer = new Tone.ToneAudioBuffer(snareUrl);
const hihatBuffer = new Tone.ToneAudioBuffer(hihatUrl);

/* Сэмплер, через него осуществляется
*  управление инструментами и вывод звука в мастер-канал
*/
const sampler = new Tone.Players({
  urls: {
    kick: kickBuffer,
    snare: snareBuffer,
    hihat: hihatBuffer,
  },
});

// Каналы для управления громкостью, стерео, мьютом и соло
const channels = {
  kick: new Tone.Channel(0).toDestination(),
  snare: new Tone.Channel(0).toDestination(),
  hihat: new Tone.Channel(0).toDestination(),
};

// Соединяем инструмент с соответствующим каналом
// console.log(channels.kick);
sampler.player('kick').connect(channels.kick);
sampler.player('snare').connect(channels.snare);
sampler.player('hihat').connect(channels.hihat);

/* Функция, непосредственно проигрывающая секвенцию
  *  time - глобальное время Tone.Transport, передается при запуске секвенсора;
  *  note - порядковый номер ноты из сетки секвенсора
*/
const playSequence = (time, noteIndex) => {
  blazeNotes(noteIndex);
  Object.keys(notes).forEach((instrument) => {
    if (notes[instrument][noteIndex].isActive) {
      sampler.player(instrument).start(time);
    }
  });
};

/* Секвенция размером в один такт 16/16, (по сути это такт 4/4, разделенный на шестнадцатые);
  *  playSequence - коллбек, который будет вызыван на каждый шаг по сетке;
  *  sequencerSubdivision - размер сетки, выраженный в длине нот:
        4n - четверти, 8n - восьмые, 16n - шестнадцатые и т.д.;
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

// Темп воспроизведения, выражается в BPM - beats per minute
Tone.Transport.bpm.value = 80;

// Функция для изменения темпа
const setTempo = (value) => {
  Tone.Transport.bpm.value = value;
};

// Функция устанавливает всем нотам неактивное состояние
// TODO: функцию имплементировать в store
// const onReset = () => {
//   Object.keys(notes).forEach((instrument) => {
//     notes[instrument] = new Array(sequencerGridLength).fill(false);
//   });
// };

// Функция изменяет значение громкости канала
const onVolumeChange = (instrument, level) => {
  const channel = channels[instrument];
  channel.volume.value = level;
};

// Функция управляет mute'ом трека
const toggleMute = (instrument) => {
  channels[instrument].mute = !channels[instrument].muted;
};

// Функция подтягивает расположение нот из store
const setNotes = () => {
  notes = store.getState().sequencer.notes;
};

export {
  onStart, onStop, setTempo, setNotes, onVolumeChange, toggleMute,
};
