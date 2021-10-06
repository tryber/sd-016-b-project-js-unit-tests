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
const testObject = productDetails('Alcool gel', 'Máscara');
const testProduto1 = testObject[0].details.productId;
const testProduto2 = testObject[1].details.productId;

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(testObject)).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(testObject).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof testObject[0] === 'object').toBe(true);
    expect(typeof testObject[1] === 'object').toBe(true);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Lapis', 'Borracha')[0]).not.toBe(productDetails('Lapis', 'Borracha')[1]);
    // Teste se os dois productIds terminam com 123.
    expect(testProduto1).toMatch(/123/);
    expect(testProduto2).toMatch(/123/);
  });
});

// Links utilizados para construção do código
// 1. https://github.com/facebook/jest/issues/3457#issuecomment-455700381