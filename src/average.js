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

const verifyParameters = (arrayParameter) => {
  let status = false;
  if (arrayParameter.length === 0) {
    status = true;
  }

  for (let i = 0; i < arrayParameter.length; i += 1) {
    if (typeof arrayParameter[i] !== 'number') {
      status = true;
    }
  }
  return status;
};

const average = (array) => {
  if (verifyParameters(array)) {
    return undefined;
  }
  let somaDosValores = 0;
  for (let i = 0; i < array.length; i += 1) {
    somaDosValores += array[i];
  }
  let mediaDosValores = somaDosValores / array.length;
  return Math.round(mediaDosValores);
};

module.exports = average;
