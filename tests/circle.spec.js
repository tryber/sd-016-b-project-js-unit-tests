/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('4 - Implemente a função `circle` e', () => {
  it('verifica se a função retorna undefined, caso o parâmetro passado não seja um número.', () => {
    expect(circle(NaN)).toBe(undefined);
  });
  it('verifica se a função retorna um objeto', () => {
    expect(typeof circle(2)).toBe('object');
  });
  it('verifica se a função retorna 3 propriedades', () => {
    expect(Object.values(circle(3)).length).toStrictEqual(3);
  });
  it('verifica se a função retorna undefined, quando não recebe nenhum parâmetro', () => {
    expect(circle()).toBe(undefined);
  });
  it('verifica se a função retorna a circunferência correta para um círculo de raio 2', () => {
      expect(circle(2)).toMatchObject({circumference: 12.56});
  });
  it('verifica se a função retorna a área correta para um círculo de raio 3', () => {
    expect(circle(3)).toMatchObject({area: 28.259999999999998});
  });
  it('verifica se a função retorna os dados corretos de um círculo de raio 3', () => {
    expect(circle(3)).toMatchObject({radius: 3, area: 28.259999999999998, circumference: 18.84});
  });

});
