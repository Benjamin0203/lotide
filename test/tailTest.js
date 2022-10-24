const assertEqual = require("../assertEqual")
const tail = require("../tail")

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
