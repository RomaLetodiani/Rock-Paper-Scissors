const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const userBtn = document.querySelector('.user-btn');
const computerBtn = document.querySelector('.computer-btn');
const playAgain = document.querySelector('.footer-btn')
const mainUp = document.querySelector('.main-upper');
const maindown = document.querySelector('.main-bottom');
const game = document.getElementById('game');
const gameResult = document.querySelector('.game-result');

let userScore = document.querySelector('.user-score');
let computerScore = document.querySelector('.computer-score');

const classes = ['rock', 'paper2', 'scissors2'];

rock.addEventListener('click', userRock);
paper.addEventListener('click', userPaper);
scissors.addEventListener('click', userScissors);
playAgain.addEventListener('click', restart);

function restart(){
    playAgain.innerHTML = '<span>Ready to play? <br> Choose your move!</span>';
    mainUp.style.display = 'flex';
    maindown.style.display = 'flex';
    game.style.display = 'none';
    computerBtn.className = 'game-btn computer-btn';
    userBtn.className = 'game-btn user-btn';
}

function gameGrade(){
    mainUp.style.display = 'none';
    maindown.style.display = 'none';
    game.style.display = 'flex';
    computerBtn.className = `game-btn computer-btn ${getRandomClass()}`;
    playAgain.innerHTML = '<span>Play Again!</span>';
};

function getRandomClass() {
    const randomIndex = Math.floor(Math.random() * classes.length);
    return classes[randomIndex];
}

function userRock() {
    gameGrade();
    userBtn.classList.add('rock');
    if (computerBtn.classList.contains('scissors2')) {
      gameResult.innerHTML = 'You Win!';
      userScore.innerHTML++;
    } else if (computerBtn.classList.contains('paper2')) {
      gameResult.innerHTML = 'You Lose';
      computerScore.innerHTML++;
    } else {
      gameResult.innerHTML = "It's A Draw";
    }
  }
  
  function userPaper() {
    gameGrade();
    userBtn.classList.add('paper2');
    if (computerBtn.classList.contains('rock')) {
      gameResult.innerHTML = 'You Win!';
      userScore.innerHTML++;
    } else if (computerBtn.classList.contains('scissors2')) {
      gameResult.innerHTML = 'You Lose';
      computerScore.innerHTML++;
    } else {
      gameResult.innerHTML = "It's A Draw";
    }
  }
  
  function userScissors() {
    gameGrade();
    userBtn.classList.add('scissors2');
    if (computerBtn.classList.contains('paper2')) {
      gameResult.innerHTML = 'You Win!';
      userScore.innerHTML++;
    } else if (computerBtn.classList.contains('rock')) {
      gameResult.innerHTML = 'You Lose';
      computerScore.innerHTML++;
    } else {
      gameResult.innerHTML = "It's A Draw";
    }
  }
  

