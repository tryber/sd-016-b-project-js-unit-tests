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
  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Teste se o retorno da função é um array.', () => {
    expect(typeof productDetails('book', 'notebook')).toBe('object');
  });

  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('book', 'notebook').length).toEqual(2);
  });

  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    const result = productDetails('book', 'notebook');
    expect(typeof result[0]).toBe('object');
    expect(typeof result[1]).toBe('object');
  });

  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const result = productDetails('book', 'notebook');
    const resultObj1 = result[0].name;
    const resultObj2 = result[1].name;
    expect(resultObj1).not.toBe(resultObj2);
    expect(resultObj2).not.toBe(resultObj1);
  });

  it('Teste se os dois productIds terminam com 123.', () => {
    const result = productDetails('book', 'notebook');
    const resultId1 = result[0].details.productId;
    const resultId2 = result[1].details.productId;
    expect(resultId1).toMatch(/123/);
    expect(resultId2).toMatch(/123/);
  });
});
