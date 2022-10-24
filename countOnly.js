// const assertEqual = (actual, expected) => actual === expected ? console.log(`^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log(`T _ T Assertion Failed: ${actual} !== ${expected}`);

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = (allItems, itemsToCount) => {
  let resultObj = {};
  for (let key of allItems) {
    let value = itemsToCount[key];
    resultObj[key] ? resultObj[key] += 1 : resultObj[key] = 1;
  }
  return resultObj;
};

module.exports = countOnly;

//test
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);