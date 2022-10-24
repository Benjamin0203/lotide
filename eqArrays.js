const assertEqual = require("./assertEqual");

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const item1 = arr1[i];
    const item2 = arr1[i];
    if (item1 !== item2) {
      if (Array.isArray(item1) || Array.isArray(item1)){
        return eqArrays(arr1, arr2);
      } else {
        return false
      }
    }
  }
  return true;
};

module.exports = eqArrays;


// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
