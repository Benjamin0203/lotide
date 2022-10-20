const map = (arr, callback) => {
  const output = [];
  for (let ele of arr) {
    output.push(callback(ele));
  }
  return output;
};


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

//Test
const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["apple", "peach", "banana", "orange"];
const words3 = ["city", "town", "country"];

const results1 = map(words1, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);
// console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'a', 'p', 'b', 'o' ]);
assertArraysEqual(results3, [ 'c', 't', 'c']);