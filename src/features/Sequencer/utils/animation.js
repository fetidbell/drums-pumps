export function unblazeNotes() {
  const blazedNotes = document.querySelectorAll('.blaze');
  blazedNotes.forEach((note) => note.classList.remove('blaze'));
}

export function blazeNotes(note) {
  unblazeNotes();
  const noteNodes = document.querySelectorAll(`[data-note-number="${note}"]`);
  noteNodes.forEach((node) => node.classList.add('blaze'));
}
