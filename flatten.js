// const eqArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = (actual, expected) => eqArrays(actual, expected) === true ? console.log(`^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log(`T _ T Assertion Failed: ${actual} !== ${expected}`);

const flatten = (arr) => {
  let result = [];
  // if (arr.length === 0) {
  //   return [];
  // }
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let ele of arr[i]) {
        result.push(ele);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
module.exports = flatten;
//Test
// const input1 = flatten([1, 2, [3, 4], 5, [6]]);
// console.log(input1);
// assertArraysEqual(input1, [1, 2, 3, 4, 5, 6]);

// const input2 = flatten([]);
// console.log(input2);
// assertArraysEqual(input2, []);

// const input3 = flatten([2, [1, 0], -1, -2]);
// console.log(input3);
// assertArraysEqual(input3, [2, 1, 0, 1, -2]);