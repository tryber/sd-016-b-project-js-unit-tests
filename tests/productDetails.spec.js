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
    expect(typeof(productDetails)).toBe('function')
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails([]).length).toBe(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof(productDetails()[0])).toBe('object')
    expect(typeof(productDetails()[1])).toBe('object')
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails()[0]).not.toBe(productDetails()[1])
    // Teste se os dois productIds terminam com 123.
    let firstProduct = productDetails()[0].details.productId;
    let secondProduct = productDetails()[1].details.productId;

    expect(firstProduct.substr(firstProduct.length - 3)).toEqual('123')
    expect(secondProduct.substr(secondProduct.length - 3)).toEqual('123')
  });
});
