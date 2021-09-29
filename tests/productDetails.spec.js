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
    const productTest = productDetails('Alcool gel', 'Máscara');
    console.log(productTest);

    // Teste se productDetails é uma função.
    expect(typeof(productDetails)).toEqual('function');

    // Teste se o retorno da função é um array.
    //expect(productTest).toEqual();

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productTest.length).toEqual(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    productTest.forEach(element => {
      expect(typeof(element)).toEqual('object');
    });

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productTest[0] !== productTest[1]).toEqual(true);

    // Teste se os dois productIds terminam com 123.
    expect(productTest[0].details.productId).toMatch('Alcool gel123');
    expect(productTest[1].details.productId).toMatch('Máscara123');
  });
});
