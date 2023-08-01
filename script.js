'use strict';
let secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.guess').value); //this function is event handler
  console.log(userGuess);

  if (!userGuess) {
    // if it's empty string
    displayMessage('👽 Message not found! 🛸');
  } else if (userGuess === secretNumber) {
    displayMessage('🎉 Correct number! 🏆');
    document.querySelector('.number').textContent = secretNumber; //displaying the guessed number
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (userGuess !== secretNumber) {
    if (score > 1) {
      //if we have more turns left
      displayMessage(
        userGuess > secretNumber ? '📈 Too high! 📈' : '📉 Too low! 📉'
      ); //we get returned the value of the msg
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😢 You lost the game 🔮');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});
