
const assert = require('assert');
const Rooster = require('../index')

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      //setup
      const expected = 'cock-a-doodle-doo!';

      //exercise
      const roosterCall = Rooster.announceDawn();

      //verify
      assert.strictEqual(roosterCall, expected);
    })
  })
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //setup
      const hour = 0;

      //exercise
      const result = Rooster.timeAtDawn(hour);

      //verify
      assert.strictEqual(result, '0');
    })

    it('throws an error if passed a number less than 0', () => {
      //setup
      const hour = -1;

      //exercise & verify
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });

    it('throws an error if passed a number greater than 23', () => {
      //setup
      const hour = 24;

      //exercise & verify
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });

  });
});