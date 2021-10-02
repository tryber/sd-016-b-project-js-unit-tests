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
  });

  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Teste se o retorno da função é um array.', () => {
    expect(typeof productDetails()).toBe('object');
  });

  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails().length).toBe(2);
  });

  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof Object.values(productDetails())[0]).toBe('object');
    expect(typeof Object.values(productDetails())[1]).toBe('object');
  });

  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails()[0].name !== productDetails()[1].name || productDetails()[0].details !== productDetails()[1].details).toBe(true);
  });

  it('Teste se os dois productIds terminam com 123.', () => {
    const pOne = productDetails()[0]['details']['productId'];
    const pTwo = productDetails()[1]['details']['productId'];
    expect(pOne.slice(pOne.length - 3) === '123' || pTwo.slice(pTwo.length - 3) === '123').toBe(true);
  });
});
