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
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(productDetails('Alcool gel', 'Máscara')).toBeInstanceOf(Array);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('Alcool gel', 'Máscara')[0]).toBeInstanceOf(Object);
    expect(productDetails('Alcool gel', 'Máscara')[1]).toBeInstanceOf(Object);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toMatchObject(productDetails('Alcool gel', 'Máscara')[1]);
    // Teste se os dois productIds terminam com 123.
    const firstProduct = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    const secondProduct = productDetails('Alcool gel', 'Máscara')[1].details.productId;

    expect(firstProduct.slice(firstProduct.length - 3) === '123' && secondProduct.slice(secondProduct.length - 3) === '123');
  });
});

// Slice pega inicio da array e -3 (tirar os 3 últimos elementos que são o 123 que queremos verificar) - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice