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

const average = (array) => {
  // add your implementation here
  let soma = 0;
  let lengArray = array.length;
  // check array size
  if (lengArray === 0) {
    return undefined;
  }
  for (let i = 0; i < lengArray; i += 1) {
    // check non-numeric values
    if (typeof array[i] !== 'number') {
      return undefined;
    }
    soma += array[i];
  }
  // returns the average of the numbers
  return Math.round(soma / lengArray);
};

module.exports = average;
