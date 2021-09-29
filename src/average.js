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

const isNumber = (arrayNumbers) => {
  let notNumber = true;
  if (arrayNumbers.length === 0) {
    notNumber = false;
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (typeof arrayNumbers[i] !== 'number') {
      notNumber = false;
    }
  }
  return notNumber;
};

const average = (arr) => {
  let sumNumbers = 0;
  let arrayAproved = isNumber(arr);
  if (arrayAproved) {
    for (let i = 0; i < arr.length; i += 1) {
      sumNumbers += arr[i];
    }
    return Math.round(sumNumbers / arr.length);
  }
  return undefined;
};

module.exports = average;
