let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (choice, target) => {
    if (choice >= 0 && choice <= 9) {
        return Math.abs(target - choice);
    } else {
        alert('Invalid input!');
    }
};

const compareGuesses = (human, pc, target) => getAbsoluteDistance(human, target) < getAbsoluteDistance(pc, target);

const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
    }
};

const advanceRound = () => currentRoundNumber += 1;
