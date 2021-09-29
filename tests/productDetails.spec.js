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
    const expected = expect.stringMatching(/123$/);
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(productDetails()).toBeInstanceOf(Array);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool gel', 'Máscara')).not.toBe(
      productDetails('Máscara', 'Alcool gel')
    );
  });
  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('teste se os dois itens são objetos', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0]).toBeInstanceOf(Object);
    expect(productDetails('Alcool gel', 'Máscara')[1]).toBeInstanceOf(Object);
  });
  // Teste se os dois productIds terminam com 123.
  it('teste para ver se os itens terminam com 123', () => {
    expect(
      productDetails('Alcool gel', 'Máscara')[0].details.productId
    ).toMatch(/123$/);
    expect(
      productDetails('Alcool gel', 'Máscara')[1].details.productId
    ).toMatch(/123$/);
  });
});
