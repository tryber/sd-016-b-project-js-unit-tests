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
    const firstProduct = 'Alcool gel';
    const secondProduct = 'Máscara';
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(productDetails(firstProduct, secondProduct)).toBeInstanceOf(Array);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails(firstProduct, secondProduct)).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails(firstProduct, secondProduct)[0]).toBeInstanceOf(Object)
    expect(productDetails(firstProduct, secondProduct)[1]).toBeInstanceOf(Object)
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails(firstProduct, secondProduct)).not.toBe(productDetails(secondProduct, firstProduct))
    // Teste se os dois productIds terminam com 123.
    expect(productDetails()[0].details.productId).toMatch('123')
    expect(productDetails()[1].details.productId).toMatch('123')
  });
});
