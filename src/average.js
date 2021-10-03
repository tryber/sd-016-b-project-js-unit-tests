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

let arr = [5,5,5,5]

const average = (arr) => {
  let media = 0

  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] !== 'number') return undefined
   }

  for(let i = 0; i <= arr.length; i++) {
    if(arr.length === 0) return undefined
   }

  for(let i = 0; i < arr.length; i++){
    media = media + arr[i]
  }

  media = media / arr.length

  return Math.round(media)
};

console.log(average(arr));

module.exports = average;
