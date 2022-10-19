
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => eqArrays(actual, expected) === true ? console.log(`^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log(`T _ T Assertion Failed: ${actual} !== ${expected}`);

//Test:
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 4]);
