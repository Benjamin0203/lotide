const assertEqual = (actual, expected) => actual === expected ? console.log("\x1b[32m%s\x1b[0m", `\tPASS ^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log("\x1b[31m%s\x1b[0m", `\tFAIL T _ T Assertion Failed: ${actual} !== ${expected}`);


// assertEqual("Lightouse Labs", "Bootcamp");
// assertEqual("Lightouse Labs", "Lighthose Labs");
// assertEqual(1, 1);
// assertEqual(1, 11);
