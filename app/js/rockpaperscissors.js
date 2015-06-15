////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return playerMove = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return computerMove = move || randomplay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
  if (playerMove == 'rock' && computerMove == 'paper') {
    winner = 'player';
  } else if (playerMove == 'rock' && computerMove == 'scissors') {
    winner = 'player';
  } else if (playerMove == 'rock' && computerMove == 'rock') {
    winner = 'tie';
  } else if (playerMove == 'paper' && computerMove == 'rock') {
    winner = 'player';
  } else if (playerMove == 'paper' && computerMove == 'paper') {
    winner = 'tie';
  } else if (playerMove == 'paper' && computerMove == 'scissors') {
    winner = 'computer';
  } else if (playerMove == 'scissors' && computerMove == 'rock') {
    winner == 'computer';
  } else if (playerMove == 'scissors' && computerMove == 'paper') {
    winner = 'player';
  } else if (playerMove == 'scissors' && computerMove == 'scissors') {
    winner = 'tie';
  }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // This function should continue to play Rock Paper Scissors until either the
    // player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played
    // what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');

    while (playerWins < 5 && computerWins < 5) {

      getInput();
      randomPlay();
      getPlayerMove();
      getComputerMove();
      getWinner();

      if (winner == 'player') {
        playerWins = playerWins++;
        console.log('Player chose' + playerMove  + ' while Computer chose' + computerMove + '. Player wins this round!');
        console.log('The score is currently' + playerWins + ' to' + computerWins + '.');
        }

      else if (winner == 'computer') {
        computerWins = computerWins++;
        console.log('Player chose' + playerMove  + ' while Computer chose' + computerMove '. Computer wins this round!');
        console.log('The score is currently' + playerWins + 'to' + computerWins + '.');
        }
      }

    // I'm not entirely sure how this return statement works
    return [playerWins, computerWins];
}
