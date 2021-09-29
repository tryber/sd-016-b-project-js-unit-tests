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

const vqv = (string, number) => {
  if (string.length === 0 && number.length === 0) {
    return undefined;
  } 
    let retorno = console.log(`Oi, meu nome é ${string}!
    Tenho ${number} anos,
    trabalho na Trybe e mando muito em programação!
    #VQV!`);
    return retorno;
};

module.exports = vqv;