const assertEqual = (actual, expected) => actual === expected ? console.log(`^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log(`T _ T Assertion Failed: ${actual} !== ${expected}`);

const head = arr => arr !==[] ? arr[0] : undefined;

assertEqual(head([0, 1, 2]), 1);
assertEqual(head(["apple", "orange", "banana"]), "apple");
assertEqual(head([]), undefined);
assertEqual(head(["single"]), "single");