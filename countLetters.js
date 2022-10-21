
const countLetters = input => {
   //Method 1
   let output = {};
   for (const i in input) {
    const item = input[i];
    if (item === ' ') {
      continue;
    }
    if (!output[item]) {
      output[item] = 0; 
    }
    output[item] ++;
  }
    return output; 
   //*Method 2
   // let output = {};
   // input = input.replace(/\s/g, '');
   // for (const ele of input) {
   //   output[ele] ? output[ele]++ : output[ele] = 1;
   // }
   // return output;
};

const assertEqual = (actual, expected) => actual === expected ? console.log(`^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log(`T _ T Assertion Failed: ${actual} !== ${expected}`);

const output1 = countLetters('counlighthouse in the housetLetters');
console.log(output1);
