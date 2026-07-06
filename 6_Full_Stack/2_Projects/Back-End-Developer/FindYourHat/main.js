const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

console.log('Welcome to the game!\n');
console.log('Instructions: Use U, D, L, R to move your character and find the hat!\n');

class Field {
    constructor(field) {
        this.field = field;
        this.position = { x: 0, y: 0};
    }

    move(direction) {
        let newX = this.position.x;
        let newY = this.position.y;

        switch (direction) {
            case 'U':
            newY -= 1;
            break;
        case 'D':
            newY += 1;
            break;
        case 'L':
            newX -= 1;
            break;
        case 'R':
            newX += 1;
            break;
        default:
                console.log('Invalid direction. Use U, D, L, or R.');
                break;
        }

        if (newY < 0 || newY >= this.field.length || newX < 0 || newX >= this.field[0].length) {
            console.log('You walked off the field! Game over.');
            process.exit();
        }

        const targetCell = this.field[newY][newX];

        if (targetCell === hole) {
            console.log('You fell in a hole! Game over.');
            process.exit();
        }
    
        if (targetCell === hat) {
            console.log('You found your hat! You win!');
            this.position = { x: newX, y: newY };
            process.exit();
        }
    
        this.position = { x: newX, y: newY };
        this.field[newY][newX] = pathCharacter
    }



    print() {
        console.clear();
        for (let i = 0; i < this.field.length; i++) {
            console.log(this.field[i]. join(''));
        }
    }

    static generateField(height, width) {
        const field = [];
        for (let i = 0; i < height; i++) {
            const row = [];
            for (let j = 0; j < width; j++) {

                const random = Math.floor(Math.random() * 10);
                if (random >= 8) {
                    row.push(hole)
                } else {
                    row.push(fieldCharacter)
                }
            }
            field.push(row);
        }
        field[0][0] = pathCharacter;
        let randH = Math.floor(Math.random() * height);
        let randW = Math.floor(Math.random() * width);

        while (randH === 0 && randW === 0) {
            randH = Math.floor(Math.random() * height);
            randW = Math.floor(Math.random() * width);
        }

        field[randH][randW] = hat;
        return new Field(field);
    }
}

const rand = Math.floor(Math.random() * 10) + 3;
const myField = Field.generateField(rand, rand);
myField.print();

console.log('Which way?')

process.stdin.on('data', (data) => {
    const input = data.toString().trim().toUpperCase();
    myField.move(input);
    myField.print();
    console.log('Which way?');
});
