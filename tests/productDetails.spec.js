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

const made = productDetails('Alcool gel', 'Máscara');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof (productDetails)).toEqual('function');
    expect(Array.isArray(made)).toEqual(true);
    expect(made.length).toEqual(2);
    expect(typeof (made[0]) === 'object' && typeof (made[1]) === 'object').toEqual(true);
    expect(made[0].name !== made[1].name).toEqual(true);
    expect(made[0].details !== made[1].details).toEqual(true);
    expect(made[0].details.productId.endsWith('123')).toEqual(true);
    expect(made[1].details.productId.endsWith('123')).toEqual(true);
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  });
});
