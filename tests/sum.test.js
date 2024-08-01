const assert = require('assert');
const sum = require('../src/sum');

describe('Sum function', function() {
  it('should return 3 when the inputs are 1 and 2', function() {
    assert.strictEqual(sum(1, 2), 3);
  });

  it('should return -1 when the inputs are -2 and 1', function() {
    assert.strictEqual(sum(-2, 1), -1);
  });
});
