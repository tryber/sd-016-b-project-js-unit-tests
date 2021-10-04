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

const average = () => {};
const average = (arrayVarSize) => {
  let sum = 0;
  if (arrayVarSize === 0) {
    return undefined;
  }
  for (let number of arrayVarSize) {
    if (typeof arrayVarSize !== "number") {
      return undefined;
    }
    sum += number / arrayVarSize.length;
  }
  return Math.round(sum);
};
module.exports = average;
