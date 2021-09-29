/* eslint-disable no-plusplus */
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

const average = (number) => {
  let media = number.length;
  let soma = 0;
    if (number.length < 1) {
    return undefined;
  }
  for (let i of number) {
    if (typeof (i) === 'string') {
      return undefined;
    }
    soma += i;
  }
  return Math.round(soma / media);
};

module.exports = average;
