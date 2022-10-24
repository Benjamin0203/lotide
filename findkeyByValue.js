const findKeyByValue = (obj, value) => Object.values(obj).includes(value) ? Object.keys(obj)[Object.values(obj).indexOf(value)] : undefined;

module.exports = findKeyByValue;
// const assertEqual = (actual, expected) => actual === expected ? console.log(`^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log(`T _ T Assertion Failed: ${actual} !== ${expected}`);

//Test

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// const input1 = findKeyByValue(bestTVShowsByGenre, "The Wire");
// const input2 = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
// console.log(input1);
// assertEqual(input1, "drama");
// assertEqual(input2, undefined);