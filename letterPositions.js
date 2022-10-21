const letterPositions = sentence => {
  const results = {};
  for (const i in sentence) {
    const item = sentence[i];
    if (item === ' ') {
      continue;
    }

    if (!results[item]) {
      results[item] = [];
    }

    results[item].push(Number(i));
  }
  return results;
};
//Method 2
// const letterPositions = sentence => {
//   const results = {};
//   sentence = sentence.replace(/\s/g, '');
//   for (let i = 0; i < sentence.length; i++) {
//     let ele = sentence[i];
//     results[ele] ? results[ele].push(i) : results[ele] = [i];
//   }
//   return results;
// };

// console.log(letterPositions("lighthouse in the house"));

//assertArraysEqual
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

//Test
const input1 = letterPositions("hello");
console.log(input1);
assertArraysEqual(input1['h'], [0]);
assertArraysEqual(input1['e'], [1]);
assertArraysEqual(input1['l'], [2, 3]);
assertArraysEqual(input1['o'], [4]);