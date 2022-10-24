
const eqArrays = require("./eqArrays");

const assertArraysEqual = (actual, expected) => eqArrays(actual, expected) === true ? console.log("\x1b[32m%s\x1b[0m", `\tPASS ^ O ^ Assertion Passed: ${actual} === ${expected}`) : console.log("\x1b[31m%s\x1b[0m", `\tFAIL T _ T Assertion Failed: ${actual} !== ${expected}`);

module.exports = assertArraysEqual;

