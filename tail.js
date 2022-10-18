const assertEqual = (actual, expected) => actual === expected ? console.log(`^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log(`T _ T Assertion Failed: ${actual} !== ${expected}`);

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

// console.log(tail([1, 2, 3, 4, 5]));
const words = ["Hello", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");

const words1 = ["one"];
console.log(tail(words1));
assertEqual(words1.length, 1);
assertEqual(tail(words1).length, 0);

