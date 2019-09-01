// set default playTo limit
var playTo = 5;

// set default player score values
var playerOneScore = 0;
var playerTwoScore = 0;

// optionally define player buttons

var playerOne = document.querySelector('#playerOne');
var playerTwo = document.querySelector('#playerTwo');

// set boolean for game state to suspend/reset play
var gameOver = false;


// allow player to change playTo limit
document.querySelector('input').addEventListener('input', function(){
  playTo = Number(document.querySelector('input').value);
  document.querySelector('.playTo').textContent = playTo;
});

// add listeners to buttons

playerOne.addEventListener('click', addPlayerOne);
playerTwo.addEventListener('click', addPlayerTwo);


// add score to player one and check score

function addPlayerOne(){
  if (!gameOver) {
      playerOneScore++;
      document.querySelector('.playerOneScore').textContent = playerOneScore;
      checkScore(playerOneScore);
  }
}

// add score to player two and check score

function addPlayerTwo(){
  if (!gameOver){
    playerTwoScore++;
    document.querySelector('.playerTwoScore').textContent = playerTwoScore;
    checkScore(playerTwoScore);
  }
}


// declare winner and end game

function checkScore(currentScore){

  if (currentScore === playTo){
      if (playerOneScore === playTo){
        document.querySelector('.playerOneScore').classList.add('winner');
      } else {
        document.querySelector('.playerTwoScore').classList.add('winner');
      }
    gameOver = true;

  }
}


//reset game values

document.querySelector('#reset').addEventListener('click', function(){
    playerOneScore = 0;
    playerTwoScore = 0;
    document.querySelector('.playerOneScore').textContent = 0;
    document.querySelector('.playerTwoScore').textContent = 0;
    document.querySelector('.playerOneScore').classList.remove('winner');
    document.querySelector('.playerOneScore').classList.remove('winner');
    gameOver = false;
});
