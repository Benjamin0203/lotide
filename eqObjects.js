const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  if (Object.keys(object2).length !== Object.keys(object1).length) {
    return false;
  }

  for (const key in object1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (typeof(value1) === "object" || typeof(value2) === "object") {
      return eqObjects(value1, value2);
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
