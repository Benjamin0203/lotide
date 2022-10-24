const takeUntil = (array, callback) => {
  let output = [];
  for (let item of array) {
    if (callback(item)) {
      return output; //end the loop early
    }
    output.push(item);
  }
  return output;
};

module.exports = takeUntil;
//Method 2
// const takeUntil = (array, callback) => {
//   let output = [];
//   for (let item of array) {
//     if (!callback(item)) {
//       output.push(item);
//     } else {
//       break;
//     }
//   }
//   return output;
// };

//AssertEqual
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

// const assertArraysEqual = (actual, expected) => eqArrays(actual, expected) === true ? console.log("\x1b[32m%s\x1b[0m", `\tPASS ^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log("\x1b[31m%s\x1b[0m", `\tFAIL T _ T Assertion Failed: ${actual} !== ${expected}`);

//Test
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
