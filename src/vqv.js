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

const vqv = (noum, age) => {
  let phrase = '';
  // console.log(noum);
  // console.log(age);
  if (noum === undefined || age === undefined) {
    return undefined;
  }
  phrase = (`Oi, meu nome é ${noum}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`);
  return phrase;
};

console.log(vqv('Maria', 90));
module.exports = vqv;
