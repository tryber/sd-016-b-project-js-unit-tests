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
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('alcool','mascara'))).toBe(true);
    expect(Object.keys(productDetails('alcool','mascara')).length).toBe(2);
    expect(typeof productDetails('alcool','mascara')[0] && typeof productDetails('alcool','mascara')[1]).toBe('object')
    expect(productDetails('alcool','mascara')[0] !== productDetails('alcool','mascara')[1]).toEqual(true)
    expect(productDetails('alcool','gel')[0].details.productId.endsWith('123')
    && productDetails('alcool','gel')[1].details.productId.endsWith('123')).toBe(true)
  });
});
