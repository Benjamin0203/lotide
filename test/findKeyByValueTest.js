const assert = require('chai').assert;
const findKeyByValue = require('../findkeyByValue');

describe("#findKeyByValue", () => {
  it("shoudl return", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const input = findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.deepEqual(input, "drama");
  });
  it("shoudl return", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const input = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    assert.deepEqual(input, undefined);
  });
});