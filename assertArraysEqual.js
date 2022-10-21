
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

const assertArraysEqual = (actual, expected) => eqArrays(actual, expected) === true ? console.log("\x1b[32m%s\x1b[0m", `\tPASS ^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log("\x1b[31m%s\x1b[0m", `\tFAIL T _ T Assertion Failed: ${actual} !== ${expected}`);

//Test:
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 4]);
