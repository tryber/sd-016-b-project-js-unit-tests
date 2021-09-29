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
// média ok
const media = (n) => {
  let answer = 0;
  for (let i = 0; i < n.length; i += 1) {
    answer += n[i];
  }
  return Math.round(answer / n.length);
};
// verifica se é number os valores;
const verifyFor = (n) => {
  let answer = null;
  for (let i = 0; i < n.length; i += 1) {
    if (typeof n[i] !== 'number') {
      answer = undefined;
      break;
    } else {
      answer = true;
    }
  }
  return answer;
};

// verifica se é array vazio e se é number os valores do array

const verify = (n) => {
  let answer = null;
  if (n[0] === undefined) {
    answer = undefined;
  } else {
  answer = verifyFor(n);
  }
  return answer;
};

const average = (array) => {
  // add your implementation here
  let answer = null;
  if (verify(array) === true) {
    answer = media(array);
  } else {
    answer = undefined;
  }
  return answer;
};

module.exports = average;
