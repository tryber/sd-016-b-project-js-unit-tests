/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (arg1, arg2) => {
  const nom = arg1;
  const age = arg2;
  if (typeof arg1 === 'string') {
return `Oi, meu nome é ${nom}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  }
    return undefined;
};

module.exports = vqv;
