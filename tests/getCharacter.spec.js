/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
Essa função recebe como parâmetro o nome de um personagem e retorna um objeto com seu nome, classe e frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna undefined.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

{
  name: 'Nome do Personagem',
  class: 'Classe do Personagem' ,
  phrases: ['frase1', 'frase2']
}

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Elabore testes para verificar se a função está funcionando de acordo com o proposto.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  // it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
  //   expect(getCharacter('Arya')).toEqual({name: 'String', class: 'String', phrases: Array});
  // });
  // ESCREVA SEUS TESTES ABAIXO:
  // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
  it('Verifica se a função, quando não recebe nenhum parâmetro, retorna undefined.', () => {
    expect(getCharacter()).toBe(undefined);
    });
  // Teste se a função retorna o objeto correto para o parâmetro 'Arya',
  // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
  // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
  it('Verifica se a função `getCharacter` retorna o objeto de cada personagem corretamente.', () => {
    expect(getCharacter('Arya')).toStrictEqual({name: 'Arya Stark', class: 'Rogue', phrases: ['Not today', 'A girl has no name.']});

    expect(getCharacter('Brienne')).toStrictEqual({name: 'Brienne Tarth', class: 'Knight', phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']});

    expect(getCharacter('Melissandre')).toStrictEqual({name: 'Melissandre', class: 'Necromancer', phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.']});
  });
  // Teste se os parâmetros não são Case Sensitive.
  it('Verifica se os parâmetros não são Case Sensitive.', () => {
    expect(getCharacter('aRya')).toStrictEqual({name: 'Arya Stark', class: 'Rogue', phrases: ['Not today', 'A girl has no name.']});
  });
  // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
  it('Verifica se ao passar um nome que não está na tabela, a função retorna undefined.', () => {
    expect(getCharacter('Ned')).toBe(undefined);
  });
});
