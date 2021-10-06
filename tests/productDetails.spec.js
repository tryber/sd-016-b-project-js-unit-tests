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
    fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    assert.strictEqual(typeof productDetails(), 'object');
    // Teste se o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (productDetails('Alcool gel', 'Máscara')[0]), 'object');
    assert.strictEqual(typeof (productDetails('Alcool gel', 'Máscara')[1]), 'object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('Alcool gel', 'Máscara')[0], productDetails('Alcool gel', 'Máscara')[1]);
    // Teste se os dois productIds terminam com 123.
    assert.ok(productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith('123') && productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith('123'));
  });
});
