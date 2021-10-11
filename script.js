'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// Close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open modal function
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
// Select the buttons and add event listener to open modals
for (let i = 0; i < btnShowModal.length; i++)
btnShowModal[i].addEventListener('click', openModal);

// Add event listener to the closing button
btnCloseModal.addEventListener('click', closeModal);

// Add event listener to the overlay
overlay.addEventListener('click', closeModal);

// ESC key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden'))
      closeModal();
});