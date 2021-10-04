const calculator = (number1, number2) => {};
const calculator = (number1, number2) => {
  let obj = {
  sum: Math.floor(number1 + number2),
  mult: Math.floor(number1 * number2),
  div: Math.floor(number1 / number2),
  sub: Math.floor(number1 - number2),
};
return obj;
};
console.log(calculator(1, 2));

const arrayGenerator = (type, object) => {};
const arrayGenerator = (type, object) => {
  if (type === 'keys') {
    return Object.keys(object);
  } 
  if (type === 'values') {
    return Object.values(object);
  }
  if (type === 'entries') {
    return Object.entries(object);
  }
};
module.exports = { calculator, arrayGenerator };