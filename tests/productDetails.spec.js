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
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    expect(productDetails('bola', 'chuteira')).toBeInstanceOf(Array);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Camiseta', 'Calça').length).toBe(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('Nhoque', 'Capeletti')[0]).toBeInstanceOf(Object);
    expect(productDetails('Nhoque', 'Capeletti')[1]).toBeInstanceOf(Object);

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Notebook', 'Computador')[0]).not.toContainEqual(productDetails('Notebook', 'Computador')[1]);
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('Carro', 'Moto')[0].details.productId).toContain('123');
    expect(productDetails('Carro', 'Moto')[1].details.productId).toContain('123');

  });
});
