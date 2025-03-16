// Open mobile menu pop-up
let openButton = document.getElementById('openbutton');
openButton.onclick = function openModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.add('is-open');
};

let closeButtons = document.querySelectorAll('.nav-link');

closeButtons.forEach(button => {
  button.onclick = function closeModal() {
    let modal = document.querySelector('#mobile-menu');
    modal.classList.remove('is-open');
  };
});
