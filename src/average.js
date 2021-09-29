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

const average = (array) => {
  let somenteNumber = true;
  let soma = 0;
  const quantidade = array.length;

  // verifica se só tem numeros
  for (let i = 0; i < quantidade; i += 1) {
    let validacao = typeof (array[i]) === 'number';

    if (!validacao) {
      somenteNumber = false;
      break;
    }

    soma += array[i];
  }

  if (somenteNumber === true && quantidade > 0) {
    return (Math.round(soma / array.length));
  }
    return undefined;
};

average([]);

module.exports = average;