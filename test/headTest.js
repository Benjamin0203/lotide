// const assertEqual = require("../assertEqual");

const assert = require('chai').assert;
const head = require("../head");
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 5 for [5]", () => {
    assert.strictEqual(head(['5']), '5');
  });
});

// assertEqual(head([0, 1, 2]), 1);
// assertEqual(head(["apple", "orange", "banana"]), "apple");
// assertEqual(head([]), undefined);
// assertEqual(head(["single"]), "single");