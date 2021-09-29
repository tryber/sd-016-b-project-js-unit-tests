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
    // Teste se productDetails é uma função.
    expect(typeof (productDetails)).toBe('function')
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('agua', 'gelo'))).toBeTruthy()
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('agua', 'gelo')).toHaveLength(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('agua', 'gelo')).toBe('agua', 'gelo')
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(typeof (productDetails)).toBe('function')
    // Teste se os dois productIds terminam com 123.
    expect(typeof (productDetails)).toBe('function')
  });
});
