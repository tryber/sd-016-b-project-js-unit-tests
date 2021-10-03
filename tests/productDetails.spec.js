const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const details = productDetails('Alcool gel', 'Máscara');

    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(details)).toBe(true);
    expect(details.length).toEqual(2);
    expect(typeof details[0] && typeof details[1]).toBe('object');
    expect(details[0] !== details[1]).toBe(true);
    expect(details[0].details.productId.substr(-3) && details[1].details.productId.substr(-3)).toBe('123');
  });
});
