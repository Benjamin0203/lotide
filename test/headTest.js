const head = require("../head");
const assertEqual = require("../assertEqual");

assertEqual(head([0, 1, 2]), 1);
assertEqual(head(["apple", "orange", "banana"]), "apple");
assertEqual(head([]), undefined);
assertEqual(head(["single"]), "single");