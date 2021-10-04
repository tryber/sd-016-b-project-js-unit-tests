const areaCircle = circle.area;
const areaArredondada = Math.round(areaCircle);

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
  it ('Verifica se ao receber um raio, a função "circle" retorna um objeto contendo valores esperados', () => { 
  // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
      expect(circle(NaN)).toBeUndefined();
    // Teste se circle retorna um objeto.
      expect(typeof circle(1)).toBe('object');
    // Teste se o objeto retornado tem 3 propriedades.
      expect(circle(7)).toEqual({ radius: 7, area: 153.86, circumference: 43.96 });
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
      expect(circle()).toBeUndefined();
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
      expect(circle(2)).toMatchObject({ radius: 2 })
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
      expect(circle(3).area).toBeCloseTo( 28.26, 10)
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
     expect(circle(3)).toMatchObject({ radius: 3 })
     expect(circle(3).area).toBeCloseTo( 28.26, 10)
     expect(circle(3)).toMatchObject({ circumference: 18.84 })
  });
});
