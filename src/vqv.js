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

const vqv = (name, year) => {
  if ((typeof name !== 'string') && (typeof year !== 'number')) {
    return undefined;
  }

  const phrase = `Oi, meu nome é ${name}!\nTenho ${year} anos,
trabalho na Trybe e mando muito em programação!\n#VQV!`;

  return phrase;
};

console.log(vqv('eglany', 23));

module.exports = vqv;
