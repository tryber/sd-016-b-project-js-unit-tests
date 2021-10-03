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

const arrayTest = [3, 4, 5];
const average = (array) => {
  let sum = 0;
  let media = 0;

  const isNotNumber = array.some((item) => { return typeof item !== 'number' });

  if (isNotNumber || array.length === 0) {
    return undefined
  };

  array.forEach((item) => {
    sum += item
    // sum = sum + item
  });

  media = sum / array.length;

  return Math.round(media)
};
console.log(average(arrayTest));

module.exports = average;
