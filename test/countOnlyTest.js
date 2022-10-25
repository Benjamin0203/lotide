const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("should return the right results", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    const actual = {
      Karl: 1,
      Salima: 2,
      Agouhanna: 1,
      Fang: 2,
      Kavith: 1,
      Jason: 1,
      Joe: 1
    };

    assert.deepEqual(result, actual);
  });
});