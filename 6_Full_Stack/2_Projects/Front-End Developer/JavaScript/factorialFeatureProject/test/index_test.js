const assert = require("assert");
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns the factorial of a number', () => {
      const input = 5;
      const expected = 120;

      const actual = Calculate.factorial(input);

      assert.strictEqual(actual, expected);
    })

    it('returns 1 when you pass 0', () => {
      const input = 0;
      const expected = 1;

      const actual = Calculate.factorial(input);

      assert.strictEqual(actual, expected);
    })

    it('throws an error when value is less than 0', () => {
      const input = -1;
      
      assert.throws(() => {
        Calculate.factorial(input);
      }, RangeError);
    });

    it('throws an error if you pass a decimal value', () => {
      const input = 6.5;
      
      assert.throws(() => {
        Calculate.factorial(input);
      }, Error);
    });

    it('throws an error if value passed is non-numeric ', () => {
      const input = 'string';
      
      assert.throws(() => {
        Calculate.factorial(input);
      }, Error);
    });

  });
});