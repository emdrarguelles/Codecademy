// gets users choice out of the options
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' /* adding bomb cheat code*/ || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid option. Please try again.')
  }
}

// gets computer to generate random option our of the 3
const getComputerChoice = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0 :
      return 'rock';
    case 1 :
      return 'paper';
    case 2 :
      return 'scissors';
    default:
      console.log('Invalid. Try Again.');
  }
}

// determine the winner based on the user and computer choices
const determineWinner = (userChoice, computerChoice) => {
  /* adding bomb cheat code*/
  if (userChoice === 'bomb') {
    return 'You win!';
  }
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins!';
    } else {
        return 'You win!';
    }
  }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
    } else {
        return 'You win!';
    }
  }
}

// function to play the game using helper functions above
const playGame = choice => {
  let userChoice = getUserChoice(choice);
  console.log(userChoice);
  let computerChoice = getComputerChoice()
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

// Play game here! Change choice below:
playGame('bomb');

