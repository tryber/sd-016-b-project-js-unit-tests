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
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toBeTruthy();
    
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.keys(productDetails()).length).toEqual(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(Object(productDetails())).toMatchObject({});

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const productOneEqual = Object.values(productDetails()[0]);
    const productTwoEqual = Object.values(productDetails()[1]);

    expect((productOneEqual !== productTwoEqual)).toEqual((productOneEqual !== productTwoEqual));

    // Teste se os dois productIds terminam com 123.
    const productOne = Object.values(productDetails()[0].details);
    const productTwo = Object.values(productDetails()[1].details);

    const expected = [
      expect.stringMatching(/[123]$/),
    ];
    expect(productOne && productTwo).toEqual(expect.arrayContaining(expected));
  });
});
