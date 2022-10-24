const assertArraysEqual = require("./assertArraysEqual");

const middle = (arr) => {
  
  if (arr.length <= 1) {
    return [];
  } else {
    const len = arr.length;
    if (arr.length % 2 === 0) {
      let indexEven = len / 2;
      // output.push(arr[(len / 2) - 1], arr[len / 2]);
      return arr.slice(indexEven - 1, indexEven + 1);
    } else {
      let indexOdd =  (len - 1) / 2;
      // output.push(arr[(len - 1) / 2]);
      return arr.slice(indexOdd, indexOdd + 1);
    }
  }
};

module.exports = middle;

//Test
console.log(middle([1, 2, 3, 4])); //[2, 3]
console.log(middle([1, 2, 3])); //[2]
console.log(middle([1, 2, 3, 4, 5])); //[3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [3, 4]);
