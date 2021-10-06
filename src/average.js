function isEmptyArray(array) {
  if (array.length === 0) return true;
  return false;
}

// Retorna verdadeiro caso uma array for composta apenas por numeros;
function onlyNumber(array) {
  for (let element of array) if (typeof element !== 'number') return false;
  return true;
}

const average = (array) => {
  if (!onlyNumber(array) || array.length === 0) return undefined;
  let numbers = 0;
  for (let element of array) numbers += Number(element);
  return Math.round(numbers / array.length);
};

module.exports = average;