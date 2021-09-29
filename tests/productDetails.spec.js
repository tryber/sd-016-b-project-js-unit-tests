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

    expect(Array.isArray(productDetails('p1', 'p2'))).toEqual(true);

    expect(productDetails('p1', 'p2').length).toEqual(2);

    const product = productDetails('p1', 'p2');
    for (let index = 0; index < product.length; index += 1) {
      expect(typeof product[index]).toBe('object');
    }

    expect(product[0]).not.toEqual(product[1]);

    for (let index = 0; index < product.length; index += 1) {
      const productId = product[index].details.productId;
      const start = productId.length - 3;
      const end = productId.length;
      expect(productId.slice(start, end)).toBe('123');
    }
  });
});
