// Toggle ClickEvent
const toggleButton = document.querySelector('.toggle-button');
const toggleButtonAfter = document.querySelector('.toggle-button::after');
const typeElements = document.querySelectorAll('.type');
const backgroundWhiteElements = document.querySelectorAll('[class*=background-white]');
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


// Copy ClickEvent
let noteMain = document.querySelector('.note-main');


function copyData (elem) {
  let dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = elem.target.innerText;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
  alert(dummy.value + '복사됨');
}

function copyHandler (e) {
  if (e.target.tagName === "PRE") {
    copyData(e);
  }
}

noteMain.addEventListener('click', copyHandler);
