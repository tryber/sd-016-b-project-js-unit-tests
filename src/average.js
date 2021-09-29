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

const average = (arr) => {
  if (arr[0] == null) {
    return undefined;
  }
  let result = [];
  const media = (a, b) => a + b;
  for (let key in arr) {
    if (typeof arr[key] === 'number') {
      result.push(arr[key]);
    } else {
      return undefined;
    }
  }
  const divisor = arr.length;
  result = Math.round(result.reduce(media) / divisor);
  return result;
};

module.exports = average;
