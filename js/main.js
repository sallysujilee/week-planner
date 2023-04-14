const modal = document.getElementById('modal');
const button = document.querySelector('.add-entry');

button.addEventListener('click', function () {
  modal.style.visibility = 'visible';
});

const modalbutton = document.querySelector('.submit');
modalbutton.addEventListener('click', function () {
  modal.style.visibility = 'hidden';
});
