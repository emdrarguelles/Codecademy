const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

console.log('Welcome to the game!');
console.log('Instructions: Use U, D, L, R to move your character and find the hat!');

class Field {
    constructor(field) {
        this.field = field;
    }

    print() {

    }

    static generateField(height, width) {

    }
}

process.stdin.on('data', (data) => {
    console.log('Which way?');
    const input = data.toString().trim();
    console.log(input);
})
