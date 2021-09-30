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
    ,0
    ,0                                                                                                                                                                                                                                                                   
    - average([1, '2']) // Retorno: undefined;
*/

const red = (a, b) => a + b; let soma = 0;

const mdedia = (arr) => { const md = Math.round(arr.reduce(red, soma) / arr.length); return md; };

const average = (a) => (a.length && a.every((e) => typeof e === 'number') ? mdedia(a) : undefined);

// const average = (arrNum) => {
  // if (arrNum.length && typeof arrNum === 'number') {
//     return Math.round(arrNum.reduce((a, b) => a + b / arrNum.length));
//   }
//   return undefined;
// };

console.log(average([1, 2, 3, 4, 5]));
module.exports = average;
