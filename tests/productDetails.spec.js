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

  const diffObj1 = productDetails('Arthur','Carol')[0];
  const diffObj2 = productDetails('Arthur','Carol')[1];

  const objProduct1 = diffObj1.details.productId
  const objProduct2 = diffObj2.details.productId

  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toEqual('function');
  });
  it('Verifica se o retorno é um array', () => {
    expect(productDetails('azul','marelo') instanceof Array).toEqual(true);
  });
  it('Verifica se possui 2 itens dentro', () => {
    expect(Object.entries(productDetails('Arthur','Carol'))).toHaveLength(2);
  });
  it('Verifica se os dois itens dentro são objetos', () => {
    expect(typeof diffObj1 && typeof diffObj2).toBe('object' && 'object');
  });
  it('Verifica se quando passados parametros diferentes, os objetos também são diferentes', () => {
    expect((objProduct1 != objProduct2) || (diffObj1.name != diffObj2.name)).toEqual(true);
  });
  it('Verifica se os dois productId`s terminam com 123', () => {
    expect(objProduct1.includes('123') && objProduct2.includes('123')).toEqual(true);
  })
});
