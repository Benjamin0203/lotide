const assertEqual = (actual, expected) => actual === expected ? console.log(`^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log(`T _ T Assertion Failed: ${actual} !== ${expected}`);

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


console.log(eqArrays([1, 2, 3], [1, 2, 3]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 2]), false);