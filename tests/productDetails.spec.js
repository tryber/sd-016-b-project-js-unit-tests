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
    expect(typeof productDetails).toBe('function');
    // Teste se productDetails é uma função.
    expect(Array.isArray(productDetails())).toBeTruthy();
    // Teste se o retorno da função é um array.
    expect(productDetails().length).toBe(2);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(typeof productDetails()[0]).toEqual('object');
    expect(typeof productDetails()[1]).toEqual('object');
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('Bolsonaro', 'Genocida')[0] === productDetails('SUS', 'SalvaVidas')[1]).toBeFalsy();
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('fora', 'bozo')[0].details.productId.substring(4)).toBe('123');
    expect(productDetails('viva', 'aCiencia')[1].details.productId.substring(8)).toBe('123')
    // Teste se os dois productIds terminam com 123.
    // ESCREVA SEUS TESTES ABAIXO:
    });
});
