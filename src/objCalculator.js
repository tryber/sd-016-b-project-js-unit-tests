/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = (num1, num2) => {
  const objCalc = {
    sum: num1 + num2,
    mult: num1 * num2,
    div: Math.floor(num1 / num2),
    sub: num1 - num2,
  };
  return objCalc;
};

const arrayGenerator = (string, calObj) => {
  let arrayResp = [];
  if (string === 'keys') {
    arrayResp = Object.keys(calObj);
  } else if (string === 'values') {
    arrayResp = Object.values(calObj);
  } else {
    arrayResp = Object.entries(calObj);
  }
  return arrayResp;
};

module.exports = calculator;
