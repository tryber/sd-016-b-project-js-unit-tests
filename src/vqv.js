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

const vqv = (param1, param2) => {
  if (param1 === undefined || param2 === undefined) {
    return undefined;
  }  
  return `Oi, meu nome é ${param1}!
  Tenho ${param2} anos,\ntrabalho na Trybe e mando muito em programação!\n#VQV!`;
};

module.exports = vqv;
