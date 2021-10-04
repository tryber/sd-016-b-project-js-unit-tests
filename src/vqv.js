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

const vqv = (string, numero) => {
  if (typeof string === 'undefined' || numero === null) return undefined;
  let paragrafo = 'string';
  paragrafo = `Oi, meu nome é ${string}!
Tenho ${numero} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  return paragrafo;
};

module.exports = vqv;