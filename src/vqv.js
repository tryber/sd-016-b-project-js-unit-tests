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
  if (typeof (string) === 'undefined' || typeof (number) === 'undefined') {
    return undefined;
  }
    const line1 = `Oi, meu nome é ${string}!\n`;
    const line2 = `Tenho ${number} anos,\n`;
    const line3 = 'trabalho na Trybe e mando muito em programação!\n';
    const line4 = '#VQV!';
    const paragrafo = `${line1}${line2}${line3}${line4}`;
    return paragrafo;
};

module.exports = vqv;
