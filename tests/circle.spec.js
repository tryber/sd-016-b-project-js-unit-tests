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

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    expect(circle(4)).toEqual({"radius": 4, "area": 50.24, "circumference": 25.12});
    expect(circle(7)).toEqual({"radius": 7, "area": 153.86, "circumference": 43.96});
    expect(circle(1)).toEqual({"radius": 1, "area": 3.14, "circumference": 6.28});
  });
  it('Verifica se ao receber uma entrada não-númerica, a funcão `circle` retorna undefined', () => {
    expect(circle('a')).toBeUndefined();
    expect(circle(' ')).toBeUndefined();
    expect(circle('1')).toBeUndefined();
  });
  it('Verifica se a quantidade de propriedade dentro do objeto retornado é igual a 3', () => {
    expect(Object.keys(circle(4))).toHaveLength(3);
  });
  it('Verifica se retorna um objeto', () => {
    expect(circle(4) instanceof Object).toBe(true);
  });
  it('Verifica se a função, quando não recebe nenhum parâmetro, retorna undefined.', () => {
    expect(circle()).toBeUndefined();
  });
  it('Verifica se a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2', () => {
      expect({"circumference": circle(2).circumference}).toEqual({"circumference": 12.56});
  });
  it('Verifica se a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.', () => {
    expect({"area": parseFloat(parseFloat(circle(3).area).toPrecision(4))}).toEqual({"area": 28.26});
  });
  it('Verifica se a função retorna, num objeto, os dados corretos de um círculo de raio 3.', () => {
    expect({"radius": circle(3).radius, "area": parseFloat(parseFloat(circle(3).area).toPrecision(4)), "circumference": circle(3).circumference}).toEqual({"radius": 3, "area": 28.26, "circumference": 18.84});
  })
});
