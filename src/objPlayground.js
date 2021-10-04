const calculator = (number1, number2) => {};
const entries = (object) => {
  let resultEntries = [];
  for (let index = 0; index < Object.keys(object).length; index += 1) {
    resultEntries.push([Object.keys(object)[index], Object.values(object)[index]]);
  }
  return resultEntries;
};

const arrayGenerator = (type, object) => {};
const calculator = (number1, number2) => {
  const calc = { sum: number1 + number2,
    mult: number1 * number2,
    div: Math.floor(number1 / number2),
    sub: number1 - number2,
  };
  return calc;
};

const arrayGenerator = (type, object) => {
  let result;
  if (type === 'keys') {
    result = Object.keys(object); 
  } else if (type === 'values') {
    result = Object.values(object);
  } else {
    result = entries(object);
  }
  return result;
};

module.exports = { calculator, arrayGenerator };