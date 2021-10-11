'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
console.log(btnShowModal);

// Select the buttons and add event listener to them
for (let i = 0; i < btnShowModal.length; i++)
btnShowModal[i].addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// Close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Add event listener to the closing button
btnCloseModal.addEventListener('click', closeModal);

// Add event listener to the overlay
overlay.addEventListener('click', closeModal);