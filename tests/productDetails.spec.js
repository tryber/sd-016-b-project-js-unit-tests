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
    const details = productDetails('Alcool gel', 'Máscara');

    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    /*
      Consultei o site abaixo para compreender como identificar se um objeto é um array.
      link: https://www.w3schools.com/jsref/jsref_isarray.asp
    */
    const isArray = Array.isArray(details);

    expect(isArray).toBe(true);

    // Teste se o array retornado pela função contém dois itens dentro.
    /*
      Consultei o site abaixo para compreender o matcher que compara o tamanho de um array.
      link: https://jestjs.io/docs/expect#tohavelengthnumber
    */
    expect(details).toHaveLength(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof details[0]).toBe('object');
    expect(typeof details[1]).toBe('object');

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(details[0]).not.toEqual(details[1]);

    // Teste se os dois productIds terminam com 123.
    /*
      Consultei o site abaixo para descobrir como selecionar uma parte de uma string.
      link: https://www.w3schools.com/jsref/jsref_slice_string.asp
    */
    const productIDEnd0 = details[0].details.productId.slice(-3);
    const productIDEnd1 = details[1].details.productId.slice(-3);

    expect(productIDEnd0).toBe('123');
    expect(productIDEnd1).toBe('123');
  });
});
