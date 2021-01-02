let toggleButton = document.querySelector('.toggle-button');
let toggleButtonAfter = document.querySelector('.toggle-button::after');
let typeElements = document.querySelectorAll('.type');
let backgroundWhiteElements = document.querySelectorAll('[class*=background-white]');
let current = null;

function toggled () {
  document.body.classList.add('background-toggled');
  toggleButton.classList.add('new-style');
  current = document.body.classList.value;
  toggleButton.style.background = '#FFFFFF';

  if(typeElements.length>0) {
    for (let i=0; i<typeElements.length; i++) {
      typeElements[i].style.color = '#1F1F1F';
    }
  }

  if(backgroundWhiteElements.length>0) {
    for (let i=0; i<backgroundWhiteElements.length; i++) {
      backgroundWhiteElements[i].style.color = '#1F1F1F';
    }
  }
}

function toggleInactive () {
  document.body.classList.remove('background-toggled');
  toggleButton.classList.remove('new-style');
  current = null;
  toggleButton.style.background = '#525252';
}


let toggleHandler = function () {
  if (current === null) {
    toggled();
  } else {
    toggleInactive();
  }
}

toggleButton.addEventListener('click', toggleHandler);
