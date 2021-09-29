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
    const testePadrao = productDetails("batata", "videogame");
    let productId1 = testePadrao[0].details.productId;
    let productId2 = testePadrao[1].details.productId;
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toEqual('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(testePadrao)).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(testePadrao.length).toEqual(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof (testePadrao[0]) && typeof (testePadrao[1])).toEqual('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(testePadrao[0] != testePadrao[1]).toBe(true);
    // Teste se os dois productIds terminam com 123.
    expect(productId1.endsWith('123') && productId2.endsWith('123')).toBe(true);
  });
});
