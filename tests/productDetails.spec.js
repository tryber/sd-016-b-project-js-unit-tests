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
    expect(typeof productDetails).toEqual('function');

    // Teste se o retorno da função é um array.
    expect(productDetails('Lampada', 'Luminaria')).toBeInstanceOf(Array);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Lampada', 'Luminaria').length).toEqual(2)

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    let result = productDetails('Lampada', 'Luminaria');

    expect(result[0]).toBeInstanceOf(Object);
    expect(result[1]).toBeInstanceOf(Object);

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    let result2 = productDetails('Lampada', 'Luminaria');

    expect(result2[0].name).toEqual('Lampada');
    expect(result2[1].name).toEqual('Luminaria');

    // Teste se os dois productIds terminam com 123.
    let result3 = productDetails('Lampada', 'Luminaria');

    expect(result3[0].details.productId).toEqual('Lampada' + '123');
    expect(result3[1].details.productId).toEqual('Luminaria' + '123');
  });
});
