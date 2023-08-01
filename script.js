'use strict';

const elements = {
  message: document.querySelector('.message'),
  guess: document.querySelector('.guess'),
  number: document.querySelector('.number'),
  score: document.querySelector('.score'),
  highscore: document.querySelector('.highscore'),
  body: document.querySelector('body'),
  check: document.querySelector('.check'),
  again: document.querySelector('.again'),
};

let secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  elements.message.textContent = message;
};

elements.check.addEventListener('click', function () {
  const userGuess = Number(elements.guess.value); //this function is event handler
  console.log(userGuess);

  // if it's empty string
  if (!userGuess) {
    displayMessage('👽 Message not found! 🛸');
  } else if (userGuess === secretNumber) {
    displayMessage('🎉 Correct number! 🏆');
    elements.number.textContent = secretNumber; //displaying the guessed number
    elements.body.style.backgroundColor = '#60b347';
    elements.number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      elements.highscore.textContent = highscore;
    }
  } else if (userGuess !== secretNumber) {
    if (score > 1) {
      //if we have more turns left
      displayMessage(
        userGuess > secretNumber ? '📈 Too high! 📈' : '📉 Too low! 📉'
      ); //we get returned the value of the msg
      score--;
      elements.score.textContent = score;
    } else {
      displayMessage('😢 You lost the game 🔮');
      elements.score.textContent = 0;
    }
  }
});

elements.again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 21);
  elements.body.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  elements.guess.value = '';
  elements.number.style.width = '15rem';
  elements.number.textContent = '?';
  elements.score.textContent = score;
});
