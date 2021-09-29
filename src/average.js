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
// const arrNum = [1, 2, 3, 4, 5];
const red = (a, b) => a + b;
const mdedia = (arr) => { const md = Math.round(arr.reduce(red) / arr.length); return md; };
const average = (arr) => (arr.every((e) => typeof e === 'number') ? mdedia(arr) : undefined);

// const average = (arrNum) => {
//   let sum = 0;
//   if (arrNum.length === 0) return undefined;
//   arrNum.forEach((num) => {
//     if (typeof num === 'number') {
//       sum += num;
//     } else {
//       return undefined;
//     }
//   });
//   return Math.round(sum / arrNum.length);
// };

console.log(average([1, 2, '3']));

module.exports = average;
