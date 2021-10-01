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
    expect(productDetails).toBeDefined();
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    const arr = productDetails('Ihhh','ala');
    expect(typeof arr).toBe('object');

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails.length).toBe(2); // function.length determina quantos argumentos são chamados na função

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails()[0]).toEqual('object');
    expect(typeof productDetails()[1]).toEqual('object'); // Daria para usar o toBeInstanceOf(Class)
      

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.

    // Teste se os dois productIds terminam com 123.
  });
});
