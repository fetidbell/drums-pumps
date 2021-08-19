import * as Tone from 'tone'

Tone.Transport.bpm.value = 160

const channels = {
  kick: new Tone.Channel(-8).toDestination(),
}

const synth = new Tone.Synth().connect(channels.kick)
const sequencerGrid = [0, 1, 2, 3]
const notes = {
  kick: [true, true, true, true],
}

const sequencer = new Tone.Sequence(
  (time, noteIndex) => {
    if (notes.kick[noteIndex]) {
      synth.triggerAttackRelease('C3', '32n', time, 10)
    }
  },
  sequencerGrid,
  '4n',
)

const onStart = () => {
  Tone.start()
  Tone.Transport.start()
  sequencer.start()
}

const onStop = () => {
  Tone.Transport.stop()
  sequencer.stop()
}

const setNotes = (newNotes, instrument) => {
  notes[instrument] = newNotes
}

const setVolume = (volumeValue) => {
  channels.kick.volume.value = volumeValue
}

const mute = () => {
  channels.kick.mute = !channels.kick.muted
}

export {
  onStart, onStop, setNotes, setVolume, mute,
}
