/* eslint-disable sonarjs/cognitive-complexity */
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

// eslint-disable-next-line complexity
const average = (array) => {
  let somenteNumber = true;
  let soma = 0;

  // verifica se só tem numeros
  for (let i = 0; i < array.length; i += 1) {
    let validacao = typeof (array[i]) === 'number';

    if (!validacao) {
      somenteNumber = false;
    }
  }

  if ((somenteNumber === true) && array.length > 0) { // verifica se é somente numero e se o array não é vazio
    for (let i = 0; i < array.length; i += 1) { // soma os numeros do array
      soma += array[i];
    }
    return (Math.round(soma / array.length));
  } 
    return undefined; // se não for somente numeros ou se o array for fazio vazio
};

module.exports = average;