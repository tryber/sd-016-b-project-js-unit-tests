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
    expect(typeof productDetails).toBe('function');
    
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('a', 'b'))).toEqual(true); //https://www.tutorialrepublic.com/faq/how-to-check-if-object-is-an-array-in-javascript.php#

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('a', 'b').length).toEqual(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const arr = productDetails('a', 'b');
    // for (i = 0; i < arr.length; i += 1) {
    //   expect(typeof arr[i]).toBe('object');
    // }
    expect(typeof arr[0] && typeof arr[1]).toBe('object');

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(arr[0] !== arr[1]).toEqual(true);

    // Teste se os dois productIds terminam com 123.
    expect(arr[0].details.productId).toEqual('a123');
    expect(arr[1].details.productId).toEqual('b123');
  });
});
