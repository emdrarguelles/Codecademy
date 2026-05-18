const Calculate = {
  factorial(num) {
    if (num < 0) {
      throw new RangeError('Use only positive numbers')
    } 
    if (!Number.isInteger(num)) {
  throw new Error('Must be a non-negative integer');
    }
    let result = 1;

    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

module.exports = Calculate;