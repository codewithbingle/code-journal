/* global data */
/* exported data */

// Selector

var $photoUrl = document.querySelector('#photoUrl');
var $image = document.querySelector('.entry-photo');
var $form = document.querySelector('form');

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
  var newEntry = {
    title: $form.elements.title.value,
    imageURL: $form.elements.url.value,
    notes: $form.elements.notes.value
  };
  newEntry.id = data.nextEntryId;
  data.nextEntryId++;
  data.entries.push(newEntry);
  $image.src = 'images/placeholder-image-square.jpg';
  $form.reset();
});
