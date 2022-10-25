const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("shoudl return { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for 'hello'", () => {
    const actual = { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] };
    assert.deepEqual(letterPositions("hello"), actual)
  });
});