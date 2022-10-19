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

//Test
console.log(middle([1, 2, 3, 4])); //[2, 3]
console.log(middle([1, 2, 3])); //[2]
console.log(middle([1, 2, 3, 4, 5])); //[3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [3, 4]);
