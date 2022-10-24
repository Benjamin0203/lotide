// const assertArraysEqual = require("../assertArraysEqual");
// const eqArrays = require("../eqArrays");
const assert = require("chai").assert;
const middle =require("../middle");

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    // assert.isTrue(eqArrays(middle([1, 2, 3, 4]), [2, 3]));
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    // assert.isTrue(eqArrays(middle([1, 2, 3]), [2]));
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});

//Test
// console.log(middle([1, 2, 3, 4])); //[2, 3]
// console.log(middle([1, 2, 3])); //[2]
// console.log(middle([1, 2, 3, 4, 5])); //[3]

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [3, 4]);