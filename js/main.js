/* global data */
/* exported data */

// Selector

var $photoUrl = document.querySelector('#photoUrl');
var $image = document.querySelector('.entry-photo');
var $form = document.querySelector('form');

// Event Listeners

$photoUrl.addEventListener('input', function (event) {
  if (isImage(event.target.value)) {
    $image.src = event.target.value;
  } else {
    $image.src = 'images/placeholder-image-square.jpg';
  }
});

// Functions

function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

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
  formToView();
  $ul.prepend(renderEntry(newEntry));
  if (data.entries.length === 1) {
    var $placeholder = document.querySelector('#placeholder');
    $placeholder.remove();
  }
});

function renderEntry(entryObject) {
  var listOfItem = document.createElement('li');
  var rowDiv = document.createElement('div');
  var columnHalf1 = document.createElement('div');
  var entryImage = document.createElement('img');
  var columnHalf2 = document.createElement('div');
  var entryHeading = document.createElement('h2');
  var entryParagraph = document.createElement('p');

  listOfItem.setAttribute('class', 'container margin-bottom-20');
  rowDiv.setAttribute('class', 'row');
  columnHalf1.setAttribute('class', 'column-half');
  entryImage.setAttribute('src', entryObject.photoUrl);
  columnHalf2.setAttribute('class', 'column-half');
  entryHeading.textContent = entryObject.title;
  entryParagraph.textContent = entryObject.notes;

  listOfItem.appendChild(rowDiv);
  rowDiv.appendChild(columnHalf1);
  columnHalf1.appendChild(entryImage);
  rowDiv.appendChild(columnHalf2);
  columnHalf2.appendChild(entryHeading);
  columnHalf2.appendChild(entryParagraph);

  return listOfItem;
}

var $ul = document.querySelector('ul');

document.addEventListener('DOMContentLoaded', renderAllEntries);

function renderAllEntries() {
  if (data.entries.length === 0) {
    var noEntries = document.createElement('li');
    noEntries.textContent = 'There are no recorded entries.';
    noEntries.className = 'new-entries';
    noEntries.id = 'placeholder';
    $ul.appendChild(noEntries);
  }
  for (var i = 0; i < data.entries.length; i++) {
    $ul.appendChild(renderEntry(data.entries[i]));
  }
  var $view = document.querySelectorAll('.view');
  for (var j = 0; j < $view.length; j++) {
    if ($view[j].id === data.view) {
      $view[j].className = 'view';
    } else {
      $view[j].className = 'view hidden';
    }
  }
}

var $a = document.querySelector('a');
var $entryForm = document.querySelector('#entry-form');
var $entries = document.querySelector('#entries');

$a.addEventListener('click', formToView);

function formToView() {
  $entryForm.className = 'view hidden';
  $entries.className = 'view';
  data.view = 'entries';
}

var $new = document.querySelector('#new-entry');

$new.addEventListener('click', viewToForm);

function viewToForm() {
  $entryForm.className = 'view';
  $entries.className = 'view hidden';
  data.view = 'entry-form';
}
