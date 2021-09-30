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
  if (lengArray === 0) {
    return undefined;
  }
  for (let i = 0; i < lengArray; i += 1) {
    if (typeof array[i] !== 'number') {
      return undefined;
    }
    soma += array[i];
  }
  return Math.round(soma / lengArray);
};

console.log(average([1, 2, 3, 4, 5])); // return 3
console.log (average([1,2,'3',4,5])); // return undefined
console.log (average([])); // return undefined

module.exports = average;