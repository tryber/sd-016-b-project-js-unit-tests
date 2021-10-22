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
    expect(typeof productDetails).toBe('function'); // Teste se productDetails é uma função.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true); // Teste se o retorno da função é um array.
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2); // Teste se o array retornado pela função contém dois itens dentro.
    expect(typeof productDetails('Alcool gel', 'Máscara')[0] === 'object' && typeof productDetails('Alcool gel', 'Máscara')[1] === 'object').toBe(true); // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('Alcool gel', 'Máscara')[0] !== productDetails('Alcool gel', 'Máscara')[1]).toBe(true); // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    
    const products = productDetails('a', 'b');
    for (let index = 0; index < products.length; index++) {
      let id = products[index].details.productId;
      for (let index = id.length - 3; index < id.length; index++) {
        const numbers = '123';
        expect((numbers[(index - id.length) + 3] === id[index])).toBe(true);
      }
    }   // Teste se os dois productIds terminam com 123.
  });
});
