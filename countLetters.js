const assertEqual = (actual, expected) => actual === expected ? console.log(`^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log(`T _ T Assertion Failed: ${actual} !== ${expected}`);

const countLetters = input => {
  let output = {};
  input = input.replace(/\s/g, '');
  for (const ele of input) {
    output[ele] ? output[ele]++ : output[ele] = 1;
  }
  return output;
};

const output1 = countLetters('counlighthouse in the housetLetters');
console.log(output1);
