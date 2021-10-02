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

// REFERÊNCIA: Obtive ajuda do grupo de estudos para execução dos demais desafios.
// GRUPO DE ESTUDOS: Hugo Daniel, Airton Silva e Breno Danyel da Turma 16 - Tribo B.

const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  let result = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) === 'string') {
      return undefined;
    }

    result += array[index];
  }

  return Math.round(result / array.length);
};

console.log(average([1, 2]));

module.exports = average;
