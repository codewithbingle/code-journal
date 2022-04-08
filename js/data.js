/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('entries-local-storage');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', saveEntry);

function saveEntry(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('entries-local-storage', dataJSON);
}

// localStorage.clear();
