// Import the encryptors functions here.
const encryptors = require('./encryptors.js');
const { caesarCipher, symbolCipher, reverseCipher } = encryptors;

const encodeMessage = (str) => {
  // Use the encryptor functions here.
    const ceasar = caesarCipher(str, 4);
    const symbol = symbolCipher(ceasar);
    const reverse = reverseCipher(symbol);
    return reverse;

}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
    const reverse = reverseCipher(str);
    const symbol = symbolCipher(reverse);
    const ceasar = caesarCipher(symbol, -4);
    return ceasar;
  
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);