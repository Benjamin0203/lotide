const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log("\x1b[32m%s\x1b[0m", `\tPASS ^ O ^ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log("\x1b[31m%s\x1b[0m", `\tFAIL T _ T Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};


const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = (object1, object2) => {
  if (Object.keys(object2).length !== Object.keys(object1).length) {
    return false;
  }

  for (const key in object1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (typeof(value1) === "object" || typeof(value2) === "object") {
      return eqObjects(value1, value2);
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};


//test
const test1 = {
  a: '1',
  b: 2
};
const actual2 = {
  b: 2,
  a: '1'
};
assertObjectsEqual(test1, actual2);
// assertObjectsEqual(5,5);

