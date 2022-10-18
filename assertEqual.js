const assertEqual = (actual, expected) => actual === expected ? console.log(`^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log(`T _ T Assertion Failed: ${actual} !== ${expected}`);
assertEqual("Lightouse Labs", "Bootcamp");
assertEqual("Lightouse Labs", "Lighthose Labs");
assertEqual(1, 1);
assertEqual(1, 11);
