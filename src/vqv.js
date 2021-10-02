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

const vqv = (str, idade) => {
  if (typeof str !== 'string') { return undefined; }
  const frase = `Oi, meu nome é ${str}!`;
  const fraseTwo = `Tenho ${idade} anos,`;
  const fraseTre = 'trabalho na Trybe e mando muito em programação!';
  const barraN = '\n';
  const vqvV = '#VQV!';
  return frase + barraN + fraseTwo + barraN + fraseTre + barraN + vqvV;
};

console.log(vqv('Tunico', 30));

module.exports = vqv;
