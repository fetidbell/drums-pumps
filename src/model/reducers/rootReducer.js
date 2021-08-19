import { sequencerSlice } from '../../features/Sequencer/model/slices';
// экспортируем объект с редьюсерами
export default {
  [sequencerSlice.name]: sequencerSlice.reducer,
};
