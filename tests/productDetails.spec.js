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
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof(productDetails)).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel123', 'Máscara123')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const products = productDetails('Alcool gel123', 'Máscara123');
    for(let index in products) {
      expect(typeof products[index]).toBe('object');
    }
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(products[0]).not.toEqual(products[1]);
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('Alcool gel123', 'Máscara123')[0].details.productId.slice(-3)).toMatch(/123/);
    expect(productDetails('Alcool gel123', 'Máscara123')[1].details.productId.slice(-3)).toMatch(/123/);
  });
});
