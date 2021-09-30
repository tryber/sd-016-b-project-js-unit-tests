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
    expect(typeof (productDetails)).toBe('function')
    // Teste se productDetails é uma função.
    expect(productDetails('Alcool Gel', 'Sabonete')).toBeInstanceOf(Array);
    // Teste se o retorno da função é um array.
    expect(productDetails('Alcool Gel', 'Sabonete')).toHaveLength(2)
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool Gel', 'Sabonete')[0]).toBeInstanceOf(Object);
    expect(productDetails('Alcool Gel', 'Sabonete')[1]).toBeInstanceOf(Object);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('Alcool Gel', 'Sabonete')[0]).not.toMatchObject(productDetails('Alcool Gel', 'Sabonete')[1]);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool Gel', 'Sabonete')[0].details.productId.endsWith(123))
    expect(productDetails('Alcool Gel', 'Sabonete')[1].details.productId.endsWith(123))
    // Teste se os dois productIds terminam com 123.
  });
});
