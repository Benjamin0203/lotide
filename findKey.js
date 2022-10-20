const findKey = (object, callback) => {
  const keyArr = Object.keys(object);
  const valueArr = Object.values(object);
  if (keyArr.length === 0) {
    return undefined;
  } else {
    for (let i = 0; i < valueArr.length; i++) {
      let starKey = valueArr[i];
      if (callback(starKey)) {
        return keyArr[i];
      }
    }
  }
};

//AssertEqual
const assertEqual = (actual, expected) => actual === expected ? console.log("\x1b[32m%s\x1b[0m", `\tPASS ^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log("\x1b[31m%s\x1b[0m", `\tFAIL T _ T Assertion Failed: ${actual} !== ${expected}`);

//Test
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

console.log(findKey({}, x => x.stars === 1));
console.log(findKey({"Blue Hill": { stars: 1 }}, x => x.stars === 2));

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
assertEqual(findKey({}, x => x.stars === 1), undefined);
assertEqual(findKey({"Blue Hill": { stars: 1 }}, x => x.stars === 2), undefined);




