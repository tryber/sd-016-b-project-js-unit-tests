/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

function isEmptyArray(array) {
  if (array.length === 0) return true;
  return false;
}

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
