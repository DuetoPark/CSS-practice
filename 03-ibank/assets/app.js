function CardEditEvent(i) {
  this.mainSection = document.querySelector('main');
  this.cards = document.querySelectorAll('.credit-card-list > li')[i];
  this.optionButton = document.querySelectorAll('.option')[i];
  this.controlGroup = document.querySelectorAll('.control-group')[i];
  this.editCard = document.querySelectorAll('.edit-button')[i];
  this.deleteCard = document.querySelectorAll('.delete-button')[i];

  this.openControlGroup = function () {
    this.controlGroup.classList.remove('control-group');
    this.controlGroup.classList.add('control-group-activate');
  }

  this.closeControlGroup = function () {
    this.controlGroup.classList.remove('control-group-activate');
    this.controlGroup.classList.add('control-group');
  }

  this.deletedCard = function (){
    this.cards.style.display = 'none';
    this.controlGroup.classList.add('control-group');
    this.controlGroup.classList.remove('control-group-activate');
  }
};

let card1 = new CardEditEvent(0);
let card2 = new CardEditEvent(1);

function CardHandler(i) {
  this.optionClickHandler = function (e) {
    if(e.target == i.optionButton){
      i.openControlGroup();
    } else if (e.target == i.deleteCard) {
      console.log(e.target);
      i.deletedCard();
    } else {
      i.closeControlGroup();
    }
    console.log(e.target);
  }
};

let doIt1 = new CardHandler(card1);
let doIt2 = new CardHandler(card2);

card1.mainSection.addEventListener('click', doIt1.optionClickHandler);
card2.mainSection.addEventListener('click', doIt2.optionClickHandler);
