const average = () => {};
const testArray = (array) => {
  let test;
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] === 'string') {
      test = true;
    }
  }
  return test;
};

const average = (array) => {
  let result;
  if ((array.length === 0) || (testArray(array))) {
    result = undefined;
  } else {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    result = Math.round((array.reduce(reducer)) / array.length);
  }
  return result;
};

module.exports = average;