const productDetails = require('../src/productDetails');
let assert = require('assert');

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
    assert.strictEqual(Array.isArray(productDetails('alcool', 'máscara')), true);
    // Teste se o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('alcool', 'máscara').length, 2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('alcool', 'máscara')[0], 'object');
    assert.strictEqual(typeof productDetails('alcool', 'máscara')[1], 'object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    /*https://nodejs.org/api/assert.html#assert_assert_notstrictequal_actual_expected_message*/
    const savedProductDetails = productDetails('alcool', 'máscara');
    assert.notStrictEqual(savedProductDetails[0], savedProductDetails[1]);
    // Teste se os dois productIds terminam com 123.
    assert.strictEqual(savedProductDetails[0].details.productId.endsWith('123'), true);
    assert.strictEqual(savedProductDetails[1].details.productId.endsWith('123'), true);
  });
});
