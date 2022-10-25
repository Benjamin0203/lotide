const assert = require("chai").assert;
const flatten = require('../flatten');

describe("#Flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
describe("#Flatten", () => {
  it("should return [] for []", () => {
    assert.deepEqual(flatten([]), []);
  });
});
describe("#Flatten", () => {
  it("should return [2, 1, 0, 1, -2] for [2, [1, 0], -1, -2]", () => {
    assert.deepEqual(flatten([2, [1, 0], -1, -2]), [2, 1, 0, -1, -2]);
  });
});