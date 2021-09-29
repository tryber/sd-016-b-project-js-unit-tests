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

const average = (arrayN) => {
  let valorTotal = 0;
  let totalN = arrayN.length;
  let resultado = 0;
  // if (Array.isArray(arrayN)) {
  //   return undefined;  
  if (totalN > 0) {
    for (let i = 0; i < totalN; i += 1) {
      if (typeof (arrayN[i]) !== 'number' || totalN === 0) {
        return undefined;
        break;
      } 
      valorTotal += arrayN[i];
    }      
    resultado = valorTotal / totalN;
    return Math.round(resultado);
  } else {
    return undefined;
  }  
}; 

// let teste = [''];
// console.log(teste.length);
console.log(average([' ']));
module.exports = average;