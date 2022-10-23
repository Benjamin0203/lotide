
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const item1 = arr1[i];
    const item2 = arr1[i];
    if (item1 !== item2) {
      if (Array.isArray(item1) || Array.isArray(item1)){
        return eqArrays(arr1, arr2)
      } else {
        return false
      }
    }
  }
  return true;
};

module.exports = eqArrays;

const assertArraysEqual = (actual, expected) => eqArrays(actual, expected) === true ? console.log("\x1b[32m%s\x1b[0m", `\tPASS ^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log("\x1b[31m%s\x1b[0m", `\tFAIL T _ T Assertion Failed: ${actual} !== ${expected}`);

//Test:
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 4]);
