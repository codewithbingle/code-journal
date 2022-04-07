/* global data */
/* exported data */

// Selector

var $photoUrl = document.querySelector('#photoUrl');
var $image = document.querySelector('.entry-photo');
var $form = document.querySelector('.container');

// Event Listeners

$photoUrl.addEventListener('input', function (event) {
  if (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test($photoUrl.value) === true) {
    $image.src = $photoUrl.value;
  } else {
    $image.src = 'images/placeholder-image-square.jpg';
  }
});

// Functions

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var newEntry = {};
  newEntry.title = $form.elements.title.value;
  newEntry.photoUrl = $form.elements.photoUrl.value;
  newEntry.notes = $form.elements.notes.value;
  newEntry.id = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(newEntry);
  $form.reset();
  $image.src = 'images/placeholder-image-square.jpg';
});
