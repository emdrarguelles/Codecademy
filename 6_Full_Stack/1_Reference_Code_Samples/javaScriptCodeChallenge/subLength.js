// Write function below
const subLength = (str, char) => {
  let counter = 0
  for (const letter of str) {
    if (letter === char) {
      counter++
    }
  }
  if (counter !== 2 ) {
    return 0;
  } 
  let index1 = str.indexOf(char)
  let index2 = str.indexOf(char, index1+1)
  let new_str = str.slice(index1, index2+1)
  return new_str.length
  }

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0