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

const average = (numberArr) => {
  // add your implementation here
  // https://www.horadecodar.com.br/2021/01/18/como-somar-elementos-de-um-array-de-maneira-performaica/
  let sum = 0;
  // let med = 0;  >>> refatorado, veja comentário da linha #31
  
  if (numberArr.length === 0) { 
    return undefined;
  }

  for (let i = 0; i < numberArr.length; i += 1) {
    if (typeof numberArr[i] !== 'number') {
      return undefined;
    }
    sum += numberArr[i];
  }
  // let med = Math.round(sum / numberArr.length); >>> aplicado diretamente no return, sem necessidade de declarar na linha #19
  
  return Math.round(sum / numberArr.length);
};

module.exports = average;
