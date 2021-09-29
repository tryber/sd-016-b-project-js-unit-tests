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
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  });
  it('Verifica se `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Verifica se o retorno da função é um array', () => {
    expect(Array.isArray(productDetails())).toBeTruthy();
  });
  it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails().length).toBe(2);
  });
  it('Verifica se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof (productDetails()[0], [1])).toBe('object');
  });
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('test', 'test2')[0] !== productDetails('test', 'test2')[1]).toBeTruthy();
  });
  it('Verifica se os dois productIds terminam com 123', () => {
    expect(productDetails('test', 'test2')[0].details.productId && productDetails('test', 'test2')[1].details.productId).toMatch(/123$/)
  });
});
