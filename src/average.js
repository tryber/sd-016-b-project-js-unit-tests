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
// Requisito 1
const average = (array) => {
  let numberArray = 0;
  let arrayAvg = 0;
  if (array.length === 0) {
    return undefined; 
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) !== 'number') {
      return undefined;
      } 
      numberArray = array[index] + numberArray;
      arrayAvg = Math.round(numberArray / array.length);
      }
      return arrayAvg;
};

module.exports = average;

// Requisito 1