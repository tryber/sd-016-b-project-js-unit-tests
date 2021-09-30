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
    expect(typeof (productDetails)).toBe('function');
  });
    
  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
  });  
  
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails().length).toBe(2);
  }); 

  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    const object = productDetails('Alcool gel', 'Máscara');
    expect(typeof (object[0])).toBe('object');
    expect(typeof (object[1])).toBe('object');
  });
  
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const object = productDetails('Alcool gel', 'Máscara');
    expect(object[0]).not.toEqual(object[1]);
  });

  it('Teste se os dois productIds terminam com 123.', () => {
    const object = productDetails('Alcool gel', 'Máscara');
    expect(object[0].details.productId.endsWith('123')).toBe(true);
    expect(object[1].details.productId.endsWith('123')).toBe(true);
  });
});
