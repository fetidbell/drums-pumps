/* Класс, описывающий ноту.
  instrument - название инструмента, которому принадлежит нота
  isActive - активна ли нота, проигрывать ли ее
*/

class Note {
  constructor(instrument, isActive) {
    this.instrument = instrument;
    this.isActive = isActive;
  }

  toggle() {
    this.isActive = !this.isActive;
  }

  on() {
    this.isActive = true;
  }

  off() {
    this.isActive = false;
  }
}

export default Note;
