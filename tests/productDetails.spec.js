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
//Verifica se a função `productDetails` tem o comportamento esperado

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Teste se productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails())).toBe(true);
  });

  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails().length).toBe(2);
  }); 

  it('Teste se o retorno da função é um array.', () => {
    const [obj1, obj2] = productDetails('a', 'b'); 
    expect(typeof obj1).toBe('object');
    expect(typeof obj2).toBe('object');
  });  

  it('este se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {  
    const [obj1, obj2] = productDetails('a', 'b');
    expect(obj1).not.toEqual(obj2);
  });  
  
  it('este se os dois productIds terminam com 123.', () => {  
    const [obj1, obj2] = productDetails('a', 'b');
    expect(obj1.details.productId.endsWith('123')).toBe(true)
    expect(obj2.details.productId.endsWith('123')).toBe(true)
  });  
});
