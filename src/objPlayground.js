const calculator = (number1, number2) => {
  const objCalc = {
    sum: Math.trunc(number1 + number2),
    mult: Math.trunc(number1 * number2),
    div: Math.trunc(number1 / number2),
    sub: Math.trunc(number1 - number2),
  };
  return objCalc;
};
const arrayGenerator = (type, object) => {
  switch (type) {
    case 'keys':
      return Object.keys(object);
    case 'values':
      return Object.values(object);
    case 'entries':
      return Object.entries(object);
    default:
      return console.log('selecione um tipo');
  }
};

module.exports = { calculator, arrayGenerator };