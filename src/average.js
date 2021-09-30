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
  let sum = 0;

  if (array.length === 0) {
    // Verifica se a array é vazia.
  
    return undefined;
  }

  for (let i of array) {
    if ((typeof i !== 'number') || (Number.isNaN(i))) {
      // Verifica se o valor não é do tipo number ou é o NaN.

      return undefined;
    }

    sum += i;
    // Soma o valor do elemento atual ao valor da variável.
  }

  const result = Math.round((sum / array.length));
  // Divide o valor de sum pelo número de elementos da array.
  // Arredonda o valor da divisão para o número inteiro mais próximo.

  return result;
};

module.exports = average;
