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
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof(productDetails)).toBe('function');

    // Teste se o retorno da função é um array.
    //olhei como verifica o array no site: https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery
    expect(Array.isArray(productDetails('a', 'b'))).toBe(true);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect((productDetails('a', 'b').length)).toBe(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const itens = productDetails('a', 'b');
    expect(typeof(itens[0])).toBe('object');
    expect(typeof(itens[1])).toBe('object');

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(itens[0] === itens[1]).toBe(false);

    // Teste se os dois productIds terminam com 123.
  });
});
