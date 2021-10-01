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
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => { });
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
  it('Verifica se productDetails é uma função.', () => {
    expect(typeof productDetails).toEqual('function');
  });
    // Teste se o retorno da função é um array.
  it('Verifica se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).not.toBeFalsy();
  });
    // Teste se o array retornado pela função contém dois itens dentro.
  it('Verifica se o retorno da fuinction tem um array com ditens dentro', () => {
    expect((productDetails('Alcool gel', 'Máscara')).length).toBe(2);
  });
    // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Verifica se os retornos da function são objects', () => {
    expect(typeof (productDetails('Alcool gel', 'Máscara')[0]))&& expect(typeof (productDetails('Alcool gel', 'Máscara')[1])).toEqual('object');
  });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toMatchObject(productDetails('Alcool gel', 'Máscara')[1]);
  });
    // Teste se os dois productIds terminam com 123.
    describe('6.2 - Teste se os dois productIds terminam com 123.', () => {
    it('Verifica se o primeiro paramentro tem o  productIds que terminam com 123.', () => {
      expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toStrictEqual(expect.stringMatching(/123$/));
    });
    it('Verifica se o segundo paramentro tem o  productIds que terminam com 123.', () => {
      expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toStrictEqual(expect.stringMatching(/123$/));
    });
    });
});
