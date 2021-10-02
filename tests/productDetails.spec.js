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
  it('Verifica se `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Verifica se a função `productDetails` retorna um array', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toBeInstanceOf(Array);
  });
  it('Verifica se o array retornado contém dois itens dentro', () => {
    const length = productDetails('Alcool gel', 'Máscara').length;
    expect(length).toBe(2);
  })
  it('Verifica se os dois itens retornados dentro do array são objetos', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
  });
  it('Verifica se quando passados parâmetros diferentes entre si, os dois objetos também são diferentes', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toMatchObject(productDetails('Alcool gel', 'Máscara')[1]);
  });
  it('Verifica se os dois productIds terminam com 123', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toStrictEqual(expect.stringMatching('123'));
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toStrictEqual(expect.stringMatching('123'));
  });
  // ESCREVA SEUS TESTES ABAIXO:
  //   Teste se productDetails é uma função.
  //   Teste se o retorno da função é um array.
  //   Teste se o array retornado pela função contém dois itens dentro.
  //   Teste se os dois itens dentro do array retornado pela função são objetos.
  //   Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  //   Teste se os dois productIds terminam com 123.
});
