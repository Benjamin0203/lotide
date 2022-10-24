const assertEqual = require("./assertEqual");
const tail = arr => {
  if (arr.length <= 1) {
    return [];
  } else {
    let output = [];
    for (let i = 1; i < arr.length; i++) {
      output.push(arr[i]);
    }
    return output;
    
  }
  
};

module.exports = tail;

// console.log(tail([1, 2, 3, 4, 5]));

