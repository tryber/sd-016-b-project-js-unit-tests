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
  if (array.some((value) => typeof value !== 'number') || (array.length === 0)) return;
  return Math.round(array.reduce((acc, curr) => acc + curr, 0) / array.length);
};

module.exports = average;

// Math.round() - arredonda valor
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round

// reduce() - cada elemento do array resultando num único valor de retorno.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// some() - testar elemento dentro de um array a um critério determinado.
// https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/

// Acc e Curr - previousValue e CurrentValue (linter não permite mais que 100 letras na linha);
// return sem valor - retorna undefined