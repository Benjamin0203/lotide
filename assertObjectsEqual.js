const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log("\x1b[32m%s\x1b[0m", `\tPASS ^ O ^ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log("\x1b[31m%s\x1b[0m", `\tFAIL T _ T Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;
//test
// const test1 = {
//   a: '1',
//   b: 2
// };
// const actual2 = {
//   b: 2,
//   a: '1'
// };
// assertObjectsEqual(test1, actual2);
// assertObjectsEqual(5,5);

